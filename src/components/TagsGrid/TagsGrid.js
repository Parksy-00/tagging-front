import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import SelectedTags from '../../states/selectedTags'
import RecommandedTags from '../../states/recommandedTags'
import MatchedFiles from '../../states/matchedFiles'
import { Space, Tag } from 'antd'
import 'antd/dist/antd.css';
import Axios from 'axios'

const TabSection = ({searchBarID, currentTab}) => {
    const [selectedTags, setSelectedTags] = useRecoilState(SelectedTags(searchBarID))
    const [tagsForCurrentTab, setTagsForCurrentTab] = useState([])
    const recommandedTags = useRecoilValue(RecommandedTags(searchBarID))
    const matchedFiles = useRecoilValue(MatchedFiles(searchBarID))
    
    useEffect(() => {
        const filterByTab = async (tags, tab) => {
            if(tab === 'All') setTagsForCurrentTab(tags)
            
            else {
                const response = tags.map(tagName => (Axios.post('http://localhost:5000/tag/include', 
                                                                 {tag: tagName, group: tab})))
                const opt = await Promise.all(response)
                const ret = tags.filter((_, index) => opt[index].data)
    
                setTagsForCurrentTab(ret)
            }
        }

        filterByTab(recommandedTags, currentTab)
    }, [matchedFiles, searchBarID])

    const updateSelected = (index) => {
        const newSelected = [
            ...selectedTags,
            recommandedTags[index]
        ]
        setSelectedTags(newSelected)
    }

    return (
        <Space size={[8, 16]} wrap>
            {tagsForCurrentTab.map((name, index) => (
                <Tag color="geekblue" 
                        key={name} 
                        onClick={() => updateSelected(index)} 
                        style={{cursor:"pointer"}}>
                    
                    {name}
                </Tag>
            ))}
        </Space>
    )
}

export default TabSection