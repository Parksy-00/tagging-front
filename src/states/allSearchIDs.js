import { atom } from 'recoil'

const allSearchIDs = atom({
    key: 'allSearchIDs',
    default: [0],
})

export default allSearchIDs