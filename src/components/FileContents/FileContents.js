import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import UnionedMatch from '../../states/unionedMatch';
import FileList from '../FileList/FileList'
import ContentHeader from '../ContentHeader/ContentHeader'
import ContentFooter from '../ContentFooter/ContentFooter'

const FileContents = () => {
    const unionedMatch = useRecoilValue(UnionedMatch)
    const [selected, setSelected] = useState([])
    const [selectAll, setSelectAll] = useState(false)

    return (
        <div style={{height:"90vh"}}>
            <ContentHeader unionedMatch={unionedMatch} setSelected={setSelected} selectAll={selectAll} setSelectAll={setSelectAll} />
            <FileList selected={selected} setSelected={setSelected} unionedMatch={unionedMatch} setSelectAll={setSelectAll} />
            <ContentFooter selected={selected} />
        </div>
    )
};

export default FileContents