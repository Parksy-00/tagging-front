import React from 'react';
import 'antd/dist/antd.css';
import { Space, Tag } from 'antd'
import SelectedTags from '../../states/selectedTags'
import RecommandedTags from '../../states/recommandedTags'
import { useRecoilState, useRecoilValue } from 'recoil';

const TabSection = ({searchBarID}) => {
    const [selectedTags, setSelectedTags] = useRecoilState(SelectedTags(searchBarID))
    const recommandedTags = useRecoilValue(RecommandedTags(searchBarID))

    const updateSelected = (index) => {
        const newSelected = [
            ...selectedTags,
            recommandedTags[index]
        ]
        setSelectedTags(newSelected)
    }
    return (
        <Space size={[8, 16]} wrap>
            {recommandedTags.map((name, index) => (
                <Tag color="geekblue" 
                        key={name} 
                        onClick={() => updateSelected(index)} 
                        style={{cursor:"pointer"}}>
                    
                    {name}
                </Tag>
            ))}
        </Space>
    )
}

export default TabSection