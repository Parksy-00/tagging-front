import 'antd/dist/antd.css'
import './style.css'
import { Select, Tag } from 'antd'
import React, { useState } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import currentSearchBar from '../../states/currentSearchBar'
import searchBarIDs from '../../states/searchBarIDs'
import allFiles from '../../states/allFiles'

const TagSearch = (props) => {
    const [currentID, setCurrentID] = useRecoilState(currentSearchBar)
    const setSeachBarIDs = useSetRecoilState(searchBarIDs)
    const canPick = useRecoilValue(recommandTags(props.searchBarID))
    const [selected, setSelected] = useRecoilState(selectedTags(props.searchBarID))
    const [filesByAllSearchBar, setFilesByAllSearchBar] = useRecoilState(allFiles)
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClear = () => {
        setCurrentID(0)
        setSeachBarIDs(old => old.filter(ID => ID === 0 || 
                                               ID !== props.searchBarID))                     
        
        const clearedID = props.searchBarID.toString()
        const {[clearedID]: _, ...withOutClearedID} = {...filesByAllSearchBar};
        setFilesByAllSearchBar(withOutClearedID)
    }

    const tagRender = (props) => {
        const { label, closable, onClose } = props;
        return (
            <Tag color="geekblue" 
                 closable={closable} 
                 onClose={onClose} 
                 style={{ marginRight: 3 }}>
                
                {label}
            </Tag>
        )
    }

    return (
        <Select mode={props.option}
                style={{ width: '100%' }}
                className={props.searchBarID === currentID ? 'current' : null}
                placeholder="태그를 입력하세요." 
                onChange={newSelected => (setSelected(newSelected))}
                onFocus={() => setCurrentID(props.searchBarID)}
                allowClear={true}
                value={selected}
                onClear={handleClear}
                open={isOpen}
                onInputKeyDown={() => setIsOpen(true)}
                onSelect={() => setIsOpen(false)}
                onBlur={() => setIsOpen(false)}
                autoFocus={true}
                listHeight={128}
                tagRender={tagRender}
                //notFoundContent옵션으로 컴포넌트 주면 
                //검색결과가 없을 때 출력 수정 가능
                >
            
            {canPick.map((item) => (<Select.Option key={item} value={item}>
                                        {item}
                                    </Select.Option>))}
        </Select>
    )
}
export default TagSearch