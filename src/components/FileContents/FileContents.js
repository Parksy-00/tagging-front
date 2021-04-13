import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import UnionedMatch from '../../states/unionedMatch';
import FileList from '../FileList/FileList'
import ContentHeader from '../ContentHeader/ContentHeader'
import ContentFooter from '../ContentFooter/ContentFooter'

const FileContents = () => {
    const unionedMatch = useRecoilValue(UnionedMatch)
    const [selectedItems, setSelectedItems] = useState([])
    const [isAllEnabled, setIsAllEnabled] = useState(false)

    return (
        <div style={{height:"90vh"}}>
            <ContentHeader unionedMatch={unionedMatch} 
                           setSelectedItems={setSelectedItems} 
                           isAllEnabled={isAllEnabled} 
                           setIsAllEnabled={setIsAllEnabled} />

            <FileList unionedMatch={unionedMatch} 
                      selectedItems={selectedItems} 
                      setSelectedItems={setSelectedItems} 
                      setIsAllEnabled={setIsAllEnabled} />

            <ContentFooter selectedItems={selectedItems} />
        </div>
    )
};

export default FileContents