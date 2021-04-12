import 'antd/dist/antd.css'
import { Space, Tag, Tabs } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import SelectedTags from '../../states/selectedTags'
import RecommandedTags from '../../states/recommandedTags'
const { TabPane } = Tabs


const TagDisplay = (props) => {
    const [selectedTags, setSelectedTags] = useRecoilState(SelectedTags(props.searchBarID))
    const recommandedTags = useRecoilValue(RecommandedTags(props.searchBarID))

    const updateSelected = (i) => {
        const newSelected = [
            ...selectedTags,
            recommandedTags[i]
        ]
        setSelectedTags(() => newSelected)
    }

    return (
        <>
        <Tabs defaultActiveKey='all' 
              style={ { height: 300 }}>

                <TabPane tab='All' 
                         key='all' 
                         style={ {overflowY: 'auto'}
                }>
                    <Space size={[8, 16]} wrap>
                        {recommandedTags.map((name, index) => (
                            <Tag color="geekblue" key={name} onClick={() => updateSelected(index)} style={{cursor:"pointer"}}>{name}</Tag>
                        ))}
                    </Space>
                </TabPane>

        </Tabs>
        </>
    )
};

export default TagDisplay
