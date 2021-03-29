import "antd/dist/antd.css"
import { Layout } from 'antd'
import React from 'react'
import { useRecoilValue} from "recoil"
import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import MultiTagSearch from '../components/MutiTagSearch'
import TagSearch from '../components/TagsSearch/TagSearch'
import VerticalStep from '../components/VerticalStep/VerticalStep'
import stepStatus from '../states/step'
import FilesDisplay from "../components/FilesDisplay/FilesDisplay"
import useAllTags from '../hooks/useAllTags'
const { Sider, Content } = Layout

export default function TutorialPage() {

  useAllTags([]);

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
              <MultiTagSearch option='multiple'/>
              <FilesDisplay/>
              </> 
            }
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
        </Content>
      </Layout>
    </div>
  );
}