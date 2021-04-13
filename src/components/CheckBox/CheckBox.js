import React from 'react'
import 'antd/dist/antd.css'
import { CheckSquareOutlined, CheckSquareFilled } from '@ant-design/icons'

function CheckBox({isEnabled, commonStyle, justForEnabled, justForDisabled, onClick}) {

    return (
        (isEnabled) 
            ? 
            <CheckSquareFilled 
                style={{...commonStyle, ...justForEnabled}}
                onClick={onClick}/> 
            
            : 
            <CheckSquareOutlined
                style={{...commonStyle, ...justForDisabled}}
                onClick={onClick}/> 
    )
}

export default CheckBox
