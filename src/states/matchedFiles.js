import { selector } from 'recoil'
import Axios from 'axios'
import selectedTags from './selectedTags'

const matchedFiles = selector({
    key: 'matchedFiles',
    get: async ({get}) => {
        const newSelected = get(selectedTags)
        const body = { selected: newSelected }

        const res = await Axios.post('http://localhost:5000/demo/search', body)
        return res.data
    }
})

export default matchedFiles