import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import Axios from 'axios'
import MatchedTags from '../states/matchedTags'

const useUpdateMatchedGroups = (newSelected) => {
    const setMatchedTags = useSetRecoilState(MatchedTags)

    useEffect(async () => {
        const body = { selected: newSelected }
        const response = await Axios.post('http://localhost:5000/tag/search', body)
        const tags = response.data.map(tag => ({...tag, groups: tag.groups.map(group => group.name)}))
        setMatchedTags(tags)

    }, [newSelected])

}

export default useUpdateMatchedGroups
