import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'
import searchBarIDs from "../states/searchBarIDs"

const useUpdateUnionMatched = (searchBarID) => {
    const Files = useRecoilValue(matchedFiles(searchBarID))
    const setUnionedFiles = useSetRecoilState(unionedMatched)
    const all = useRecoilValue(allFiles)
    const IDs = useRecoilValue(searchBarIDs)

    useEffect(() => {
        if(Object.keys(all).length !== 0) {
            const keys = Object.keys(all).filter((key) => IDs.includes(parseInt(key)))
            const files = keys.map((key) => all[key]).flat(1)

            let ret = []
            const set = new Set()
            files.forEach(file => {
                if(!set.has(file.name)) {
                    set.add(file.name)
                    ret = [...ret, file]
                }
            })
            setUnionedFiles(ret)
        }
    }, [Files])
}   

export default useUpdateUnionMatched