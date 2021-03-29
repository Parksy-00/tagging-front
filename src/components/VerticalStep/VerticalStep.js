import React from 'react';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import { useRecoilState } from 'recoil';
import stepStatus from '../../states/step'

const { Step } = Steps;

let VerticalStep = () => {
  let [status, setstatus] = useRecoilState(stepStatus);
  let current = status.currentIndex;

  let onChange = (current) => {
    setstatus({
      currentIndex: current
    })
  }

  return (
    <Steps current={current} onChange={onChange} direction="horizontal" size="small" style={{width:'50%'}}>
      <Step title="시작하기"  />
      <Step title="탐색하기" />
      <Step title="직접 묘사하기" />
      <Step title="묘사하지 않기" />
    </Steps>
  );
}

export default VerticalStep