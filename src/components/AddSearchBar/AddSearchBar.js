import 'antd/dist/antd.css'
import {PlusCircleTwoTone} from '@ant-design/icons'
import React from 'react'
import './style.css'
import { useSetRecoilState, useRecoilState } from 'recoil';
import AllSearchIDs from '../../states/allSearchIDs'
import CurrentSearchID from '../../states/currentSearchID';

export default function AddSearchBar() {

    const [allSearchIDs, setAllSearchIDs] = useRecoilState(AllSearchIDs)
    const setCurrentSearchID = useSetRecoilState(CurrentSearchID);
    
    const insertNewId = () => {
        setCurrentSearchID(allSearchIDs[allSearchIDs.length - 1] + 1);

        setAllSearchIDs(oldIDs => [
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