import "antd/dist/antd.css"
import React from 'react'
import { Layout } from 'antd'
import { useRecoilState, useRecoilValue} from "recoil"

import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import TagSearch from '../components/TagSearch/TagSearch'
import VerticalStep from '../components/VerticalStep/VerticalStep'
import stepStatus from '../StepManage/step'
import UploadPage from '../components/uploadSpace/uploadSpace'
const { Sider, Content } = Layout

export default function TutorialPage() {

  let step = useRecoilValue(stepStatus)

  return (
    <div className="TutorialPage" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Sider theme='light' width="400px" style={{minHeight:"100vh", position:"relative"}}>
          <VerticalStep/>
        </Sider>
        <Content>
            {step.currentIndex === 1 && 
              //탐색하기
              <>
              <br></br><br></br>
              <TagDisplay/>
              <br></br><br></br>
              <TagSearch option='multiple'/>
              </> }
            {step.currentIndex === 2 && 
              //직접 묘사하기
              <>
              <br></br><br></br>
              <TagDisplay/>
              <br></br><br></br>
              <TagSearch option='tags'/>
              <br></br><br></br>
              <UploadPage/>
              </>
            }
            {step.currentIndex === 3 &&
              //직접 묘사하지 않기
              <>
              <br></br><br></br>
              <TagDisplay/>
              <br></br><br></br>
              <TagSearch option='tags'/>
              <br></br><br></br>
              <UploadPage/>
              </>
            }
        </Content>
      </Layout>
    </div>
  );
}