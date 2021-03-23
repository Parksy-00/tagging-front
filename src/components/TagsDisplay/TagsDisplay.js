import React from 'react'
import {recommandList, selectedTags} from '../../atoms/tags'
import { Space, Tag } from 'antd'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import {fileAtom} from '../../atoms/file'
import Axios from 'axios'
import 'antd/dist/antd.css'

const TagDisplay = () => {
    const list = useRecoilValue(recommandList)
    // const tagMapUpdater = useSetRecoilState(relatedTags)
    const [selected, setSelected] = useRecoilState(selectedTags)
    const setFiles = useSetRecoilState(fileAtom)
    // function deleteTag(tag) {
    //     tagMapUpdater((tagMap) => {
    //         tagMap.delete(tag)
    //         return tagMap
    //     })
    // }   
    const onClick = (e, i) => {
        let newSelected = [
            ...selected,
            list[i]
        ]
        setSelected(() => newSelected)

        const body = { selected: newSelected}
        Axios.post('http://localhost:5000/document/search', body)
            .then(res => {
                const files = res.data
                console.log(files)
                setFiles(files)
            })
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