import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Axios from 'axios'
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"

const useUnionMatched = (searchBarID) => {
    const Files = useRecoilValue(matchedFiles(searchBarID))
    const [unionedFiles, setUnionedFiles] = useRecoilState(unionedMatched)
    
    useEffect(() => {
        setUnionedFiles([...new Set([...Files, ...unionedFiles])])
    })
}

export default useUnionMatched