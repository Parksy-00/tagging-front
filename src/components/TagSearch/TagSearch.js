import React from 'react'
import tagList from '../../TagManage/tags'
import { AutoComplete } from 'antd'
import { useRecoilValue } from 'recoil';
import 'antd/dist/antd.css'

const TagSearch = () => {
    const options = useRecoilValue(tagList)

    return (
        <AutoComplete
            style={{
            width: 200,
            }}
            options={options}
            placeholder="태그를 입력하세요."
            filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    )
}
export default TagSearch