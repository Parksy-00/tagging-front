import React from 'react'
import {tagList, selectedTags} from '../../TagManage/tags'
import { Select } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import 'antd/dist/antd.css'

const TagSearch = () => {
    let canPick = useRecoilValue(tagList)
    canPick = canPick.map((item) => (<Select.Option key={item} value={item}>
                                        {item}
                                     </Select.Option>))
                                     
    let selected = useRecoilValue(selectedTags)
    let selectedChange = useSetRecoilState(selectedTags)

    function handleChange(value) {
        selectedChange(value)
    }

    return (
        <Select mode="tags" 
                style={{ width: '100%' }} 
                placeholder="태그를 입력하세요." 
                onChange={handleChange}
                value={selected}
                >
                    
            {canPick}
        </Select>
    )
}
export default TagSearch