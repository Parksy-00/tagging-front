import "antd/dist/antd.css"
import React, { Suspense, useEffect } from 'react'
import { Layout } from 'antd'
import { useRecoilValue, useRecoilState, useSetRecoilState} from "recoil"
import Axios from 'axios'
import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import TagSearch from '../components/TagsSearch/TagSearch'
import VerticalStep from '../components/VerticalStep/VerticalStep'
import stepStatus from '../states/step'
import UploadPage from '../components/UploadSpace/uploadSpace'
import FilesDisplay from "../components/FilesDisplay/FilesDisplay"
import allTags from '../states/allTags'
const { Sider, Content } = Layout

export default function TutorialPage() {
  const allTagsSet = useSetRecoilState(allTags)
  useEffect(() => {
        Axios.get('http://localhost:5000/demo/alltag')
          .then(res => {
              allTagsSet(res.data)
          })        
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let step = useRecoilValue(stepStatus)

  return (
    <div className="TutorialPage" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Sider theme='light' width="400px" style={{minHeight:"100vh", position:"relative"}}>
          <VerticalStep/>
        </Sider>
        <Content>
          <Suspense fallback={<div></div>}>
            {step.currentIndex === 1 && 
              //탐색하기
              <>
              <br></br><br></br>
              <TagDisplay/>
              <br></br><br></br>
              <TagSearch option='multiple'/>
              <FilesDisplay/>
              </> }
            {step.currentIndex === 2 && 
              //직접 묘사하기
              <>
              <br></br><br></br>
              <TagDisplay/>
              <br></br><br></br>
              <TagSearch option='tags'/>
              <br></br><br></br>
              {/* <UploadPage/> */}
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
              {/* <UploadPage/> */}
              </>
            }
          </Suspense>
            
        </Content>
      </Layout>
    </div>
  );
}