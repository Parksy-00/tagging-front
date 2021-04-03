import 'antd/dist/antd.css'
import { Space, Tag } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import SelectedTags from '../../states/selectedTags'
import RecommandedTags from '../../states/recommandedTags'


const TagDisplay = (props) => {
    const [selectedTags, setSelectedTags] = useRecoilState(SelectedTags(props.searchBarID))
    const recommandedTags = useRecoilValue(RecommandedTags(props.searchBarID))

    const updateSelected = (i) => {
        const newSelected = [
            ...selectedTags,
            recommandedTags[i]
        ]
        setSelectedTags(() => newSelected)
    }

    return (
        <Space size={[8, 16]} wrap>
            {recommandedTags.map((name, index) => (
                // <Tag closable onClose={() => deleteTag(name)}>{name}</Tag>
                // index as key is anti-pattern
                <Tag color="geekblue" key={index} onClick={() => updateSelected(index)} style={{cursor:"pointer"}}>{name}</Tag>
            ))}
        </Space>
    )
};

export default TagDisplay
