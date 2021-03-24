import { selector } from 'recoil'
import matchedFiles from './matchedFiles'
import selectedTags from './selectedTags'
import allTags from './allTags'

const recommandTags = selector({
    key: 'recommand',
    get: ({get}) => {
        const selected = get(selectedTags)
        const matched = get(matchedFiles)
        const defaultTags = get(allTags)

        let files = matched.map(_ => _.tags)
        if(files.length === 0) {
            return defaultTags
        }
        
        else {
            let ret = new Set([])
            files.forEach(tags => {ret = new Set(...ret, ...tags)})
            return [...ret].slice(selected.length)
        }
    }
})

export default recommandTags