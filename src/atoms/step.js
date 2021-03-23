import { atom } from 'recoil'

let StepStatus = atom({
  key: 'stepStatus',
  default: {
      currentIndex: 0
  },
});

export default StepStatus