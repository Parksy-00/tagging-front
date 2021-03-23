import "antd/dist/antd.css"
import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useRecoilValue, useRecoilState} from "recoil"
import Axios from 'axios'
import { relatedTags } from '../atoms/tags'

import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import TagSearch from '../components/TagSearch/TagSearch'
import VerticalStep from '../components/VerticalStep/VerticalStep'
import stepStatus from '../atoms/step'
import UploadPage from '../components/UploadSpace/uploadSpace'
import FilesDisplay from "../components/FileDisplay/FilesDisplay"
const { Sider, Content } = Layout

export default function TutorialPage() {
  
  const [related, setRelated] = useRecoilState(relatedTags)

  useEffect(() => {
        Axios.get('http://localhost:5000/')
        .then(res => {
            const tagList = res.data
            console.log(tagList)
            const newMap = new Map(related)
            tagList.forEach(tag => {
                newMap.set(tag.name, tag.related)
            })
            setRelated(newMap)
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