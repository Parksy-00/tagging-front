import React from 'react'
import tagList from '../../TagManage/tags'
import { Space, Tag } from 'antd'
import { useRecoilState } from 'recoil';
import 'antd/dist/antd.css'

const TagDisplay = () => {
    let [list, setlist] = useRecoilState(tagList);

    function deleteTag() {
        console.log('maybe use setlist to modify')
    }
    return (
        <Space size={[4, 4]} wrap>
            {list.map((name, index) => (
            <Tag closable onClose={deleteTag}>{name.value}</Tag>
            ))} 
        </Space>
    )
};

export default TagDisplay