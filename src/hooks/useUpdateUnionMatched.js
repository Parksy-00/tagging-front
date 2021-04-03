import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import MatchedFiles from '../states/matchedFiles'
import UnionedMatched from "../states/unionedMatch"
import AllFiles from '../states/AllFiles'
import AllSearchIDs from "../states/allSearchIDs"

const useUpdateUnionMatched = (currentID) => {
    const matchedFiles = useRecoilValue(MatchedFiles(currentID))
    const setUnionedFiles = useSetRecoilState(UnionedMatched)
    const allFiles = useRecoilValue(AllFiles)
    const allSearchIDs = useRecoilValue(AllSearchIDs)

    useEffect(() => {
        if(Object.keys(allFiles).length !== 0) {
            const originalFiles = Object.values(allFiles).flat(1)
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
    }, [matchedFiles, allSearchIDs])
}   

export default useUpdateUnionMatched