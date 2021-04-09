import "antd/dist/antd.css"
import { Layout } from 'antd'
import React from 'react'
import { useRecoilValue } from "recoil"
import MultiTagSearch from '../components/MultiTagSearch/MutiTagSearch'
import DemoStep from '../components/DemoStep/DemoStep'
import stepStatus from '../states/step'
import FileContents from "../components/FileContents/FileContents"
import useAllTags from '../hooks/useAllTags'
import GroupDisplay from "../components/GroupDisplay/GroupDisplay"
import GroupSearch from "../components/GroupSearch/GroupSearch"
import useAllGroups from "../hooks/useAllGroups"
import TagContents from "../components/TagContents/TagContents"
const { Sider, Content, Header } = Layout

export default function TutorialPage() {
  useAllTags([]);
  useAllGroups([])

  let step = useRecoilValue(stepStatus)
  return (
    <div className="TutorialPage" style={{height:"100vh", width:"100%"}}>
      <Layout>
        <Header style={{backgroundColor:'#fff', height:"10vh", display:'flex', alignItems:'center', justifyContent:'center', borderBottom:"1px solid #E5E7E9"}}>
           <DemoStep/>
        </Header>
        <Layout>
          <Sider theme='light' width="500px" style={{minHeight:"90vh", position:"relative", padding:'30px'}}>
            {step.currentIndex === 0 && 
              //시작하기
              <>
              인트로
              </>
            }
            {step.currentIndex === 1 && 
              //탐색하기
              <MultiTagSearch option='multiple'/>
            }
            {step.currentIndex === 2 && 
              //관리하기(가제)
              <>
                <GroupDisplay />
                <div style={{marginTop:'20px'}}>
                  <GroupSearch />
                </div>
                
              </>
            }
            {step.currentIndex === 3 && 
              //직접 묘사하기
              <>
              업로드하면서 태깅
              </>
            }
            {step.currentIndex === 4 &&
              //직접 묘사하지 않기
              <>
              자동 태깅
              </>
            }
          </Sider>
          <Content>
            {step.currentIndex === 2 &&
              <TagContents />
            }
            {step.currentIndex !== 2 &&
              <FileContents />
            }
          </Content>
        
        </Layout>
        
      </Layout>
    </div>
  );
}