import { atom } from 'recoil'

const searchBarIDs = atom({
    key: 'searchBarIDs',
    default: [1, 2],
})

export default searchBarIDs