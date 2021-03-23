import React from 'react'
import {selectedTags, recommandList} from '../../atoms/tags'
import { Select } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fileAtom } from '../../atoms/file'
import Axios from 'axios'
import 'antd/dist/antd.css'

const TagSearch = (props) => {

    const setFiles = useSetRecoilState(fileAtom)

    let canPick = useRecoilValue(recommandList)
    canPick = canPick.map((item) => (<Select.Option key={item} value={item}>
                                        {item}
                                     </Select.Option>))
                                     
    let selected = useRecoilValue(selectedTags)
    let selectedChange = useSetRecoilState(selectedTags)

    function handleChange(value) {
        selectedChange(value)
        
        const body = { selected: value}

        Axios.post('http://localhost:5000/document/search', body)
            .then(res => {
                const files = res.data
                console.log(files)
                setFiles(files)
            })
    }

    return (
        <Select mode={props.option}
                style={{ width: '100%' }} 
                placeholder="태그를 입력하세요." 
                onChange={handleChange}
                value={selected}
                //notFoundContent옵션으로 컴포넌트 주면 
                //검색결과가 없을 때 출력 수정 가능
                >
                    
            {canPick}
        </Select>
    )
}
export default TagSearch