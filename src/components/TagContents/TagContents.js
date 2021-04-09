import 'antd/dist/antd.css'
import { Space, Avatar } from 'antd'
import React from 'react'
import { useRecoilValue } from 'recoil';
import MatchedTags from '../../states/matchedTags';
import SelectableDisplay from '../SelectableDisplay/SelectableDisplay';

const TagContents = () => { 
    const matchedTags = useRecoilValue(MatchedTags)
    
    return (
        // <Space size={[16, 16]} wrap style={{margin:"50px"}}>
        //     {matchedTags.map((tag, i) => (
        //         <div key={i}>
        //             {/* index as key is anti-pattern */}
        //            <Avatar style={{width:"100px", height:"100px", display:'flex', alignItems:"center"}}>{tag.name}</Avatar> 
        //         </div>
        //     ))}
        // </Space>
        <SelectableDisplay array={matchedTags.map(_ => _.name)}/>
    )
};

export default TagContents