import 'antd/dist/antd.css'
import { Select } from 'antd'
import React, { useState } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import useUpdateSoloMatched from '../../hooks/useUpdateSoloMatched'
import useUpdateUnionMatched from '../../hooks/useUpdateUnionMatched'
import currentSearchBar from '../../states/currentSearchBar'
import searchBarIDs from '../../states/searchBarIDs'
import allFiles from '../../states/allFiles'

const TagSearch = (props) => {
    const setCurrentID = useSetRecoilState(currentSearchBar)
    const setSeachBarIDs = useSetRecoilState(searchBarIDs)
    const canPick = useRecoilValue(recommandTags(props.searchBarID))
                        .map((item) => (<Select.Option key={item} value={item}>
                                            {item}
                                        </Select.Option>))
                                        
    const [selected, setSelected] = useRecoilState(selectedTags(props.searchBarID))
    const [all, setAll] = useRecoilState(allFiles)
    useUpdateSoloMatched(selected, props.searchBarID)
    useUpdateUnionMatched(props.searchBarID)
    
    const [option, setOption] = useState(false)

    const handleClear = () => {
        setCurrentID(0)
        setSeachBarIDs(old => old.filter(ID => ID === 0 || 
                                               ID !== props.searchBarID))                     
        
        let newAll = {...all}
        const key = props.searchBarID.toString()
        delete newAll[key]
        setAll(newAll)
    }

    return (
        <Select mode={props.option}
                style={{ width: '100%' }} 
                placeholder="태그를 입력하세요." 
                onChange={newSelected => (setSelected(newSelected))}
                onFocus={() => setCurrentID(props.searchBarID)}
                allowClear={true}
                value={selected}
                onClear={handleClear}
                open={option}
                onInputKeyDown={() => setOption(true)}
                onSelect={() => setOption(false)}
                onBlur={() => setOption(false)}
                //notFoundContent옵션으로 컴포넌트 주면 
                //검색결과가 없을 때 출력 수정 가능
                >
            
            {canPick}
        </Select>
    )
}
export default TagSearch