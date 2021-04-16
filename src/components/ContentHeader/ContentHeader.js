import React from 'react'
import 'antd/dist/antd.css'
import CheckBox from '../CheckBox/CheckBox'
import { Typography, List } from 'antd'
const Text = Typography.Text

function ContentHeader({unionedMatch, setSelectedItems, isAllEnabled, setIsAllEnabled}) {

    const onClick = () => {
        const container = document.querySelector('.ant-list-items')
        if(container == null) return
        const items = container.children

        setIsAllEnabled(!isAllEnabled)
        isAllEnabled = !isAllEnabled
        

        if(isAllEnabled) {
            [].forEach.call(items, item => item.classList.add('selected'))
            setSelectedItems(unionedMatch)
        }
        else {
            [].forEach.call(items, item => item.classList.remove('selected'))
            setSelectedItems([])
        }
    }

    const commonStyle = {margin:'0 40px', fontSize:'20px', verticalAlign:'middle', cursor:'pointer'}
    const justForEnabled = {color: '#1E90FF'}
    const justForDisabled = {}

    return (
        <div style={{padding:'15px 40px 15px'}}>
            <div style={{border: '1px solid #d9d9d9', backgroundColor:'white', height: "100%", display:'flex', alignItems:'flex-end'}}>
                <List.Item
                    style={{width:'100%', padding:'5px'}}
                    extra={<Text style={{fontSize:'18px', verticalAlign:'middle', marginRight:"calc(10vw + 200px)", userSelect:'none'}}>태그</Text>}
                >
                    <CheckBox commonStyle={commonStyle}
                              justForEnabled={justForEnabled}
                              justForDisabled={justForDisabled} 
                              onClick={onClick}
                              isEnabled={isAllEnabled}/>
                        
                    <Text style={{fontSize:'18px', verticalAlign:'middle', userSelect:'none'}}>이름</Text>
                </List.Item>
            </div>
        </div>
    )
}

export default ContentHeader
