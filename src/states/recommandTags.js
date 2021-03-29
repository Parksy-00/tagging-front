import { selectorFamily } from 'recoil'
import matchedFiles from './matchedFiles'
import selectedTags from './selectedTags'
import allTags from './allTags'

const recommandTags = selectorFamily({
    key: 'recommandTags',
    get: (searchBarID) => ({get}) => {
        const selected = get(selectedTags(searchBarID))
        const files = get(matchedFiles(searchBarID)).map(_ => _.tags)
        const defaultTags = get(allTags)

        if(files.length === 0) return defaultTags
        
        let ret = new Set([])
        files.forEach(tags => {ret = new Set([...ret, ...tags])})

        return [...ret].filter(tag => !selected.includes(tag))
    }
})

export default recommandTags