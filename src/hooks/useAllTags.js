import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import Axios from 'axios'
import AllTags from '../states/allTags'

const useAllTags = (option) => {
    const setAllTags = useSetRecoilState(AllTags)
    useEffect(async () => {
        const response = await Axios.get('http://localhost:5000/demo/alltag') 
        setAllTags(response.data)
    }, option)
}

export default useAllTags