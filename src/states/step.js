import { atom } from 'recoil'

const StepStatus = atom({
  key: 'stepStatus',
  default: {
      currentIndex: 0
  },
});

export default StepStatus