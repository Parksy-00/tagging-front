import 'antd/dist/antd.css';
import { useRecoilValue } from "recoil"
import TagSearch from '../TagsSearch/TagSearch'
import TagDisplay from '../TagsDisplay/TagsDisplay'
import searchBarIDs from '../../states/searchBarIDs'
import currentSearchBar from '../../states/currentSearchBar'
import AddSearchBar from '../AddSearchBar/AddSearchBar'
import selectedTags from '../../states/selectedTags'
import useUpdateSoloMatched from '../../hooks/useUpdateSoloMatched'
import useUpdateUnionMatched from '../../hooks/useUpdateUnionMatched'

const MultiTagSearchAndDisplay = (props) => {
    const IDs =  useRecoilValue(searchBarIDs)
    const currentID = useRecoilValue(currentSearchBar)
    const selected = useRecoilValue(selectedTags(currentID))

    useUpdateSoloMatched(selected, currentID)
    useUpdateUnionMatched(currentID)
    return (
        <div>
            <TagDisplay searchBarID={currentID}/>
            {IDs.map((ID, i) => (
                <div key={i} style={{marginTop:"20px"}}>
                    {/* index as key is anti-pattern */}
                    <TagSearch option={props.option} searchBarID={ID} /> 
                </div>
            ))}
            <AddSearchBar/>
        </div>
    )
}

export default MultiTagSearchAndDisplay