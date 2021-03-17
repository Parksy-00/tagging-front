import { atom } from 'recoil'

const tagList = atom({
  key: 'tagList',
  default: [
    {
      value: '1태그',
    },
    {
      value: '12태그',
    },
    {
      value: '23태그',
    },
  ],
});

export default tagList