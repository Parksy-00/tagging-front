import React from 'react'
import 'antd/dist/antd.css'
import { DownloadOutlined } from '@ant-design/icons'
import { Typography, List, Button  } from 'antd'
const Text = Typography.Text

function ContentFooter({selectedItems}) {

    const actions = [
                        <Button type="primary" style={{margin:'10px 10px'}}><DownloadOutlined />다운로드</Button>,
                        <Button style={{margin:'10px 10px'}}>태그 수정</Button>,
                        <Button danger style={{margin:"10px 5vw 10px 10px"}}>삭제</Button>
                    ]
                     

    return (
        <div style={{padding:'20px 40px 10px'}}>
            <div style={{border: '1px solid #d9d9d9', backgroundColor:'white', height: "100%", display:'flex', alignItems:'flex-end'}}>
                <List.Item style={{width:'100%', padding:'5px'}}
                           actions={actions}>
 
                    <Text style={{fontSize:'18px', verticalAlign:'middle', userSelect:'none', marginLeft:'40px'}}>{selectedItems.length} 개의 파일 선택됨</Text>
 
                </List.Item>
                
            </div>
        </div>
    )
}

export default ContentFooter
