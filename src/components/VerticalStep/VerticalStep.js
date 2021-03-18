import React from 'react';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import { useRecoilState } from 'recoil';
import stepStatus from '../../StepManage/step'

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
    <Steps current={current} onChange={onChange} direction="vertical" style={{marginTop:"10vh"}}>
      <Step title="시작하기" description="Stolage가 무엇인가요?" style={{height:'100px', marginLeft:"50px"}}/>
      <Step title="탐색하기" description="내 파일를 어떻게 찾을 수 있나요?" style={{height:'100px', marginLeft:"50px"}}/>
      <Step title="직접 묘사하기" description="내 파일을 어떻게 묘사하나요?" style={{height:'100px', marginLeft:"50px"}}/>
      <Step title="묘사하지 않기" description="하나하나 수동으로 묘사해야하나요?" style={{height:'100px',marginLeft:"50px"}}/>
    </Steps>
  );
}

export default VerticalStep