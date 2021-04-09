import 'antd/dist/antd.css'
import { Select, Tag } from 'antd'
import React, { useState } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import SelectedGroups from '../../states/selectedGroups'
import MatchedTags from '../../states/matchedTags'
import RecommandedGroups from '../../states/recommandedGroups'


const GroupsSearch = (props) => {
    const recommandedGroups = useRecoilValue(RecommandedGroups)
    const [selectedGroups, setSelectedGroups] = useRecoilState(SelectedGroups)
    const setMatchedTags = useSetRecoilState(MatchedTags)
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClear = () => {
        setMatchedTags([])
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
        <Select mode='multiple'
                style={{ width: '100%' }}
                placeholder="태그를 입력하세요." 
                onChange={newSelected => (setSelectedGroups(newSelected))}
                allowClear={true}
                value={selectedGroups}
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
            
            {recommandedGroups.map((item) => (<Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>))}
        </Select>
    )
}
export default GroupsSearch