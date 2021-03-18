import "antd/dist/antd.css"
import React from 'react'
import { Layout } from 'antd'

import VerticalStep from '../components/VerticalStep/VerticalStep'
const { Sider, Content } = Layout

export default function TutorialPage() {
  return (
    <div className="TutorialPage" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Sider theme='light' width="400px" style={{minHeight:"100vh", position:"relative"}}>
          <VerticalStep></VerticalStep>
        </Sider>
        <Content>
        </Content>
      </Layout>
    </div>
  );
}