import { atom } from 'recoil'

const allTags = atom({
    key: 'all',
    default: ['2']
})

export default allTags