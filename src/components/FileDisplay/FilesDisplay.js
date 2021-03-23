import React from 'react'
import { Space, Avatar } from 'antd'
import { useRecoilValue } from 'recoil';
import {fileAtom} from '../../atoms/file'
import 'antd/dist/antd.css'

const FilesDisplay = () => {
    const files = useRecoilValue(fileAtom)

    return (
        <Space size={[16, 16]} wrap style={{margin:"50px"}}>
            {files.map((file, i) => (
                <div key={i}>
                   <Avatar style={{width:"100px", height:"100px", display:'flex', alignItems:"center"}}>{file.name}</Avatar> 
                </div>
            ))}
        </Space>
    )
};

export default FilesDisplay