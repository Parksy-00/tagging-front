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
const { Sider, Content, Header } = Layout

export default function TutorialPage() {

  useAllTags([]);

  let step = useRecoilValue(stepStatus)
  return (
    <div className="TutorialPage" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Header style={{backgroundColor:'#fff', height:"10vh", display:'flex', alignItems:'center', justifyContent:'center', borderBottom:"1px solid #E5E7E9"}}>
           <VerticalStep/>
        </Header>
        <Layout>
          <Sider theme='light' width="500px" style={{minHeight:"90vh", position:"relative", padding:'30px'}}>
          {step.currentIndex === 1 && 
              //탐색하기
              <MultiTagSearch option='multiple'/>
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
          </Sider>
          <Content>
            <FilesDisplay/>
          </Content>
        
        </Layout>
        
      </Layout>
    </div>
  );
}