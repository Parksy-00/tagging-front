import { atom } from 'recoil'

const allTags = atom({
    key: 'all',
    default: ['']
})

export default allTags