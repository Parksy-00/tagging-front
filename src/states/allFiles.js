import { atom } from 'recoil'

const allFiles = atom({
    key: 'allFiles',
    default: []
})

export default allFiles