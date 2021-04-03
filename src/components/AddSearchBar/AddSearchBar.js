import 'antd/dist/antd.css'
import {PlusCircleTwoTone} from '@ant-design/icons'
import React from 'react'
import './style.css'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import searchBarIDs from '../../states/searchBarIDs'
import currentSearchBar from '../../states/currentSearchBar';

export default function AddSearchBar() {

    const setIDs = useSetRecoilState(searchBarIDs)
    const setCurrentID = useSetRecoilState(currentSearchBar);
    const IDs =  useRecoilValue(searchBarIDs)
    
    const insertNewId = () => {
        setCurrentID(IDs[IDs.length - 1] + 1);

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