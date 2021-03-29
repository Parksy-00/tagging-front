import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { useRecoilValue } from "recoil"
import TagSearch from '../components/TagsSearch/TagSearch'
import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import searchBarIDs from '../states/searchBarIDs'
import currentSearchBar from '../states/currentSearchBar'

const MultiTagSearchAndDisplay = (props) => {
    const IDs =  useRecoilValue(searchBarIDs)
    const currentID = useRecoilValue(currentSearchBar)

    return (
        <div>
            <TagDisplay searchBarID={currentID}/>
            {IDs.map((ID, i) => (
                <div key={i} style={{marginTop:"20px"}}>
                    {/* index as key is anti-pattern */}
                    <TagSearch option={props.option} searchBarID={ID} /> 
                </div>
            ))}
        </div>
    )
}

export default MultiTagSearchAndDisplay