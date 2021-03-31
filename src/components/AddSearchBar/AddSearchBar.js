import 'antd/dist/antd.css'
import {PlusCircleTwoTone} from '@ant-design/icons'
import React from 'react'
import './style.css'
import { useSetRecoilState } from 'recoil';
import searchBarIDs from '../../states/searchBarIDs'

export default function AddSearchBar() {

    const setIDs = useSetRecoilState(searchBarIDs)

    const insertNewId = () => {
        setIDs(oldIDs => [
            ...oldIDs,
            oldIDs[oldIDs.length - 1] + 1
        ])
    }

    return (
        <div className="addSearch" onClick={insertNewId}>
            <PlusCircleTwoTone style={{marginRight:"5px"}} />
            <span>검색창 추가</span>
        </div>
    )
}