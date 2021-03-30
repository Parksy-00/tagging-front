import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'

const useUpdateUnionMatched = (searchBarID) => {
    const Files = useRecoilValue(matchedFiles(searchBarID))
    const setUnionedFiles = useSetRecoilState(unionedMatched)
    const all = useRecoilValue(allFiles)

    useEffect(() => {
        if(Object.keys(all).length !== 0) {
            const files = Object.values(all).flat(1)
            // Object.values(all) -> (파일이름, 파일태그들)객체의 배열이 검색창 수만큼 있는 배열

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