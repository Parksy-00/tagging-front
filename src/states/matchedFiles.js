import { atomFamily } from 'recoil'

const matchedFiles = atomFamily({
    key: 'matchedFiles',
    default: []
})

export default matchedFiles
