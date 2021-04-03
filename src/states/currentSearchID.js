import { atom } from 'recoil'

const currentSearchID = atom({
    key: 'currentSearchID',
    default: 0
})

export default currentSearchID
