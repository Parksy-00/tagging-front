import 'antd/dist/antd.css'
import { Space, Tag } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import RecommandedGroups from '../../states/recommandedGroups'
import SelectedGroups from '../../states/selectedGroups'
import useUpdateMatchedGroups from '../../hooks/useUpdateMatchedTags'


const GroupsDisplay = () => {
    const [selectedGroups, setSelectedGroups] = useRecoilState(SelectedGroups)
    const recommandedGroups = useRecoilValue(RecommandedGroups)

    const updateSelected = (i) => {
        const newSelected = [
            ...selectedGroups,
            recommandedGroups[i]
        ]
        setSelectedGroups(() => newSelected)
    }

    useUpdateMatchedGroups(selectedGroups)

    return (
        <Space size={[8, 16]} wrap>
            {recommandedGroups.map((name, index) => (
                // <Tag closable onClose={() => deleteTag(name)}>{name}</Tag>
                // index as key is anti-pattern
                <Tag color="geekblue" key={index} onClick={() => updateSelected(index)} style={{cursor:"pointer"}}>{name}</Tag>
            ))}
        </Space>
    )
};

export default GroupsDisplay
