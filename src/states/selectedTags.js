import { atomFamily } from 'recoil'

const selectedTags = atomFamily({
    key: 'selectedTags',
    default: [],
})

export default selectedTags