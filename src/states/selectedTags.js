import { atom } from 'recoil'

const selectedTags = atom({
    key: 'select',
    default: ['6월'],
})

export default selectedTags