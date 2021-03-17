import React from 'react';
import 'antd/dist/antd.css';
import { Steps } from 'antd';

const { Step } = Steps;

export default class VerticalStep extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <Steps current={current} onChange={this.onChange} direction="vertical">
        <Step title="Step 1" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" description="This is a description." />
      </Steps>
    );
  }
}