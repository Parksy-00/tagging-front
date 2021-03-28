import { atom } from 'recoil'

const matchedFiles = atom({
    key: 'matchedFiles',
    default: []
})

export default matchedFiles
