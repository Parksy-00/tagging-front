import React from 'react'
import {recommandList, relatedTags} from '../../TagManage/tags'
import { Space, Tag } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import 'antd/dist/antd.css'

const TagDisplay = () => {
    const list = useRecoilValue(recommandList)
    const tagMapUpdater = useSetRecoilState(relatedTags)

    // function deleteTag(tag) {
    //     tagMapUpdater((tagMap) => {
    //         tagMap.delete(tag)
    //         return tagMap
    //     })
    // }   

    return (
        <Space size={[8, 16]} wrap>
            {list.map((name) => (
                //<Tag closable onClose={() => deleteTag(name)}>{name}</Tag>
                <Tag>{name}</Tag>
            ))} 
        </Space>
    )
};

export default TagDisplay