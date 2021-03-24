import React from 'react'
import { Space, Tag } from 'antd'
import 'antd/dist/antd.css'
import { useRecoilValue, useRecoilState } from 'recoil'
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'


const TagDisplay = () => {
    const [selected, setSelected] = useRecoilState(selectedTags)
    const list = useRecoilValue(recommandTags)
    console.log('tagdisplay')
    console.log(list)
    const onClick = (e, i) => {
        let newSelected = [
            ...selected,
            list[i]
        ]
        setSelected(() => newSelected)
    }

    return (
        <Space size={[8, 16]} wrap>
            {list.map((name, index) => (
                //<Tag closable onClose={() => deleteTag(name)}>{name}</Tag>
                <Tag key={index} onClick={(e) => onClick(e, index)} style={{cursor:"pointer"}}>{name}</Tag>
            ))}
        </Space>
    )
};

export default TagDisplay