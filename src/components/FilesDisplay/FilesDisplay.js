import 'antd/dist/antd.css'
import { Space, Avatar } from 'antd'
import React from 'react'
import { useRecoilValue } from 'recoil';
import unionedMatch from '../../states/unionedMatch';

const FilesDisplay = () => { 
    const files = useRecoilValue(unionedMatch)
    console.log(files)
    
    return (
        <Space size={[16, 16]} wrap style={{margin:"50px"}}>
            {files.map((file, i) => (
                <div key={i}>
                    {/* index as key is anti-pattern */}
                   <Avatar style={{width:"100px", height:"100px", display:'flex', alignItems:"center"}}>{file.name}</Avatar> 
                </div>
            ))}
        </Space>
    )
};

export default FilesDisplay