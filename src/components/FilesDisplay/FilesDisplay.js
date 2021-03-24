import React from 'react'
import { Space, Avatar } from 'antd'
import { useRecoilValue } from 'recoil';
import matchedFiles from '../../states/matchedFiles'
import 'antd/dist/antd.css'

const FilesDisplay = () => {
    const files = useRecoilValue(matchedFiles)
    console.log('filedisplay')
    console.log(files)

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