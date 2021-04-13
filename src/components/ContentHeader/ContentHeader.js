import React from 'react'
import 'antd/dist/antd.css'
import { CheckSquareOutlined, CheckSquareFilled } from '@ant-design/icons'
import { Typography, List  } from 'antd'
const Text = Typography.Text

function ContentHeader({unionedMatch, setSelectedItems, isAllEnabled, setIsAllEnabled}) {

    const onClick = () => {
        setIsAllEnabled(!isAllEnabled)
        isAllEnabled = !isAllEnabled
        
        const container = document.querySelector('.ant-list-items')
        const items = container ? container.children : []

        if(isAllEnabled) {
            [].forEach.call(items, item => item.classList.add('selected'))
            setSelectedItems(unionedMatch)
        }
        else {
            [].forEach.call(items, item => item.classList.remove('selected'))
            setSelectedItems([])
        }
    }

    return (
        <div style={{padding:'15px 40px 15px'}}>
            <div style={{border: '1px solid #d9d9d9', backgroundColor:'white', height: "100%", display:'flex', alignItems:'flex-end'}}>
                <List.Item
                    style={{width:'100%', padding:'5px'}}
                    extra={<Text style={{fontSize:'18px', verticalAlign:'middle', marginRight:"calc(10vw + 200px)", userSelect:'none'}}>태그</Text>}
                >
                    <div>
                        {isAllEnabled 
                            ? 
                            <CheckSquareFilled 
                                style={{margin:'0 40px', fontSize:'20px', verticalAlign:'middle', cursor:'pointer', color: '#1E90FF'}}
                                onClick={onClick}/> 
                            
                            : 
                            <CheckSquareOutlined
                                style={{margin:'0 40px', fontSize:'20px', verticalAlign:'middle', cursor:'pointer'}}
                                onClick={onClick}/> 
                        }
                        
                        <Text style={{fontSize:'18px', verticalAlign:'middle', userSelect:'none'}}>이름</Text>
                    </div>
                </List.Item>
                
            </div>
        </div>
    )
}

export default ContentHeader
