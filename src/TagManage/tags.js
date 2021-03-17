import { atom } from 'recoil'

let tagList = atom({
  key: 'tagList',
  default: [
    {
        value: '2014년',
    },
    {
        value: '2015년',
    },
    {
        value: '2016년',
    },
    {
        value: '6월',
    },
    {
        value: '9월',
    },
    {
        value: '1단원',
    },
    {
        value: '4단원',
    },
    {
        value: '중요',
    },
  ],
});

export default tagList