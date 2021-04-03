import 'antd/dist/antd.css';
import { useRecoilValue } from "recoil"
import TagSearch from '../TagsSearch/TagSearch'
import TagDisplay from '../TagsDisplay/TagsDisplay'
import AllSearchIDs from '../../states/allSearchIDs'
import CurrentSearchID from '../../states/currentSearchID'
import AddSearchBar from '../AddSearchBar/AddSearchBar'
import SelectedTags from '../../states/selectedTags'
import useUpdateSoloMatched from '../../hooks/useUpdateSoloMatched'
import useUpdateUnionMatched from '../../hooks/useUpdateUnionMatched'

const MultiTagSearchAndDisplay = (props) => {
    const allSearchIDs =  useRecoilValue(AllSearchIDs)
    const currentSearchID = useRecoilValue(CurrentSearchID)
    const selectedTags = useRecoilValue(SelectedTags(currentSearchID))

    useUpdateSoloMatched(selectedTags, currentSearchID)
    useUpdateUnionMatched(currentSearchID)
    return (
        <div>
            <TagDisplay searchBarID={currentSearchID}/>
            {allSearchIDs.map((ID, i) => (
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