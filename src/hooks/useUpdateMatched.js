import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Axios from 'axios'
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"

const useUpdateMatched = (newSelected, searchBarID) => {
    const setFiles = useSetRecoilState(matchedFiles(searchBarID))
    const [unionedFiles, setUnionedFiles] = useRecoilState(unionedMatched)
    const thisFile = useRecoilValue(matchedFiles(searchBarID))

    useEffect(async () => {
        const body = { selected: newSelected }
        const response = await Axios.post('http://localhost:5000/demo/search', body)
        setFiles(response.data)    

    }, [newSelected, searchBarID])

    useEffect(() => {
        console.log('unionedFiles')
        console.log(unionedFiles)
        console.log('-----------------')
        console.log('thisFile')
        console.log(thisFile)
        console.log('-----------------')
        console.log('qdwdqwddqwdqw')
        setUnionedFiles([...new Set([...unionedFiles, ...thisFile])])
        console.log('unionedFiles')
        console.log(unionedFiles)
        console.log('-----------------')
        console.log('thisFile')
        console.log(thisFile)
        console.log('-----------------')

    }, [matchedFiles(searchBarID)])
}

export default useUpdateMatched
