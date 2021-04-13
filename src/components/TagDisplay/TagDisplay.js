import 'antd/dist/antd.css'
import './style.css'
import { Tabs } from 'antd'
import React from 'react'
import TagsGrid from '../../components/TagsGrid/TagsGrid'
import { useRecoilValue } from 'recoil'
import allGroups from '../../states/allGroups'
const { TabPane } = Tabs


const TagDisplay = ({searchBarID}) => {
    const AllGroups = ['All', ...useRecoilValue(allGroups)]

    return (
        <Tabs defaultActiveKey='All' 
              >
                {AllGroups.map((name) => (
                    <TabPane tab={name} 
                             key={name}
                             className="TagGrid"
                    >

                        <TagsGrid searchBarID={searchBarID} currentTab={name} />
                    </TabPane>
                ))}
        </Tabs>
    )
};

export default TagDisplay
