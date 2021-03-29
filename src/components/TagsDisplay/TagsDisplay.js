import 'antd/dist/antd.css'
import { Space, Tag } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import useUpdateMatched from '../../hooks/useUpdateMatched'

const TagDisplay = (props) => {
    const [selected, setSelected] = useRecoilState(selectedTags(props.searchBarID))
    const list = useRecoilValue(recommandTags(props.searchBarID))
    useUpdateMatched(selected, props.searchBarID)

    const onClick = i => {
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
                <Tag key={index} onClick={() => onClick(index)} style={{cursor:"pointer"}}>{name}</Tag>
            ))}
        </Space>
    )
};

export default TagDisplay
