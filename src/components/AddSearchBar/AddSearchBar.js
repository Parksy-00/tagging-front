import 'antd/dist/antd.css'
import { Select } from 'antd'
import {PlusCircleTwoTone} from '@ant-design/icons'
import React from 'react'
import './style.css'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import useUpdateSoloMatched from '../../hooks/useUpdateSoloMatched'
import useUpdateUnionMatched from '../../hooks/useUpdateUnionMatched'
import currentSearchBar from '../../states/currentSearchBar'
import searchBarIDs from '../../states/searchBarIDs'

export default function AddSearchBar() {

    const [IDs, setIDs] = useRecoilState(searchBarIDs)

    const onClick = (e) => {
        setIDs(oldIDs => [
            ...oldIDs,
            oldIDs[oldIDs.length-1] + 1
        ])
    }

    return (
        <div className="addSearch" onClick={onClick}>
            <PlusCircleTwoTone style={{marginRight:"5px"}} />
            <span>검색창 추가</span>
        </div>
    )
}