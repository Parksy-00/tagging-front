import 'antd/dist/antd.css'
import './style.css'
import { Select, Tag } from 'antd'
import React, { useState } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import SelectedTags from '../../states/selectedTags'
import CurrentSearchID from '../../states/currentSearchID'
import AllSearchIDs from '../../states/allSearchIDs'
import AllFiles from '../../states/allFiles'
import RecommandedTags from '../../states/recommandedTags'



const TagSearch = ({searchBarID, option}) => {
    const [currentSearchID, setCurrentSearchID] = useRecoilState(CurrentSearchID)
    const setAllSeachIDs = useSetRecoilState(AllSearchIDs)
    const recommandedTags = useRecoilValue(RecommandedTags(searchBarID))
    const [selectedTags, setSelectedTags] = useRecoilState(SelectedTags(searchBarID))
    const [allFiles, setAllFiles] = useRecoilState(AllFiles)
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClear = () => {
        setCurrentSearchID(0)
        setAllSeachIDs(old => old.filter(ID => ID === 0 || 
                                               ID !== searchBarID))                     
        
        const clearedID = searchBarID.toString()
        const {[clearedID]: _, ...withOutClearedID} = {...allFiles};
        setAllFiles(withOutClearedID)
    }

    const tagRender = ({ label, closable, onClose }) => {
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
        <Select mode={option}
                style={{ width: '100%' }}
                className={searchBarID === currentSearchID ? 'current no-reset' : 'no-reset'}
                placeholder="태그를 입력하세요." 
                onChange={newSelected => (setSelectedTags(newSelected))}
                onFocus={() => setCurrentSearchID(searchBarID)}
                allowClear={true}
                value={selectedTags}
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
            
            {recommandedTags.map((item) => (<Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>))}
        </Select>
    )
}
export default TagSearch