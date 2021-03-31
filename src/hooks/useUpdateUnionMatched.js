import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'
import searchBarIDs from "../states/searchBarIDs"

const useUpdateUnionMatched = (currentID) => {
    const filesByID = useRecoilValue(matchedFiles(currentID))
    const setUnionedFiles = useSetRecoilState(unionedMatched)
    const all = useRecoilValue(allFiles)
    const allIDs = useRecoilValue(searchBarIDs)

    useEffect(() => {
        if(Object.keys(all).length !== 0) {
            const originalFiles = Object.values(all).flat(1)
            const set = new Set()

            const duplicateRemover = (acc, file) => {
                if(set.has(file.name)) return acc;
                else {
                    set.add(file.name)
                    return [...acc, file]
                }
            }

            const processedFiles = originalFiles.reduce(duplicateRemover, [])
            setUnionedFiles(processedFiles)
        }
    }, [filesByID, allIDs])
}   

export default useUpdateUnionMatched