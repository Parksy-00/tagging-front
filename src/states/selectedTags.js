import { atom } from 'recoil'

const selectedTags = atom({
    key: 'select',
    default: [],
})

export default selectedTags