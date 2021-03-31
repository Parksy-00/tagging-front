import React from 'react';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import { useRecoilState } from 'recoil';
import stepStatus from '../../states/step'

const { Step } = Steps;

const DemoStep = () => {
  const [status, setstatus] = useRecoilState(stepStatus);
  const current = status.currentIndex;

  const changeCurrentIndex = (current) => {
    setstatus({
      currentIndex: current
    })
  }

  return (
    <Steps current={current} 
           onChange={changeCurrentIndex} 
           direction="horizontal" 
           size="small" 
           style={{width:'65%'}}>

      <Step title="시작하기"  />
      <Step title="탐색하기" />
      <Step title="관리하기(가제)" />
      <Step title="직접 묘사하기" />
      <Step title="묘사하지 않기" />
    </Steps>
  );
}

export default DemoStep