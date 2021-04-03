import { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import Axios from 'axios'
import MatchedFiles from '../states/matchedFiles'
import AllFiles from "../states/allFiles"

const useUpdateSoloMatched = (newSelected, searchBarID) => {
    const setMatchedFiles = useSetRecoilState(MatchedFiles(searchBarID))
    const [allFiles, setAllFiles] = useRecoilState(AllFiles)

    useEffect(async () => {
        const body = { selected: newSelected }
        const response = await Axios.post('http://localhost:5000/demo/search', body)
        setMatchedFiles(response.data)    
        setAllFiles({...allFiles, [searchBarID]: response.data})

    }, [newSelected, searchBarID])

}

export default useUpdateSoloMatched
