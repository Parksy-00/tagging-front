import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import Axios from 'axios'
import matchedFiles from '../states/matchedFiles'

const useUpdateMatched = (newSelected) => {
    const setFiles = useSetRecoilState(matchedFiles)

    useEffect(() => {
        const body = { selected: newSelected }
        Axios.post('http://localhost:5000/demo/search', body)
            .then(res => {
                setFiles(res.data)
            })
    }, [newSelected])
}

export default useUpdateMatched
