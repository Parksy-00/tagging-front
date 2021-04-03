import 'antd/dist/antd.css'
import { Space, Tag } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import useUpdateSoloMatched from '../../hooks/useUpdateSoloMatched'
import useUpdateUnionMatched from '../../hooks/useUpdateUnionMatched'

const TagDisplay = (props) => {
    const [selected, setSelected] = useRecoilState(selectedTags(props.searchBarID))
    const list = useRecoilValue(recommandTags(props.searchBarID))

    const updateSelected = (i) => {
        const newSelected = [
            ...selected,
            list[i]
        ]
        setSelected(() => newSelected)
    }

    return (
        <Space size={[8, 16]} wrap>
            {list.map((name, index) => (
                // <Tag closable onClose={() => deleteTag(name)}>{name}</Tag>
                // index as key is anti-pattern
                <Tag color="geekblue" key={index} onClick={() => updateSelected(index)} style={{cursor:"pointer"}}>{name}</Tag>
            ))}
        </Space>
    )
};

export default TagDisplay
