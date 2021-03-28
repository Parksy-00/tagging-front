import 'antd/dist/antd.css'
import { Select } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil';
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import useUpdateMatched from '../../hooks/useUpdateMatched'

const TagSearch = (props) => {
    let canPick = useRecoilValue(recommandTags)
    canPick = canPick.map((item) => (<Select.Option key={item} value={item}>
                                        {item}
                                     </Select.Option>))

    const [selected, setSelected] = useRecoilState(selectedTags)
    useUpdateMatched(selected)

    return (
        <Select mode={props.option}
                style={{ width: '100%' }} 
                placeholder="태그를 입력하세요." 
                onChange={newSelected => (setSelected(newSelected))}
                value={selected}
                //notFoundContent옵션으로 컴포넌트 주면 
                //검색결과가 없을 때 출력 수정 가능
                >
                    
            {canPick}
        </Select>
    )
}
export default TagSearch