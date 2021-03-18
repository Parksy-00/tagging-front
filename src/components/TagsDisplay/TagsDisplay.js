import React from 'react'
import {recommandList, relatedTags, selectedTags} from '../../TagManage/tags'
import { Space, Tag } from 'antd'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import 'antd/dist/antd.css'

const TagDisplay = () => {
    const list = useRecoilValue(recommandList)
    const tagMapUpdater = useSetRecoilState(relatedTags)
    const [selected, setSelected] = useRecoilState(selectedTags)
    // function deleteTag(tag) {
    //     tagMapUpdater((tagMap) => {
    //         tagMap.delete(tag)
    //         return tagMap
    //     })
    // }   
    const onClick = (e, i) => {
        setSelected((oldSelected) => [
            ...oldSelected,
            list[i]
        ])
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