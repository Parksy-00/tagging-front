import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { useRecoilValue } from "recoil"
import TagSearch from '../components/TagsSearch/TagSearch'
import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import searchBarIDs from '../states/searchBarIDs'

const MultiTagSearchAndDisplay = (props) => {
    const IDs =  useRecoilValue(searchBarIDs)

    return (
        IDs.map((ID, i) => (
            <div key={i}>
                {/* index as key is anti-pattern */}
                <br></br><br></br>
                <TagDisplay searchBarID={ID}/>
                <br></br><br></br>
                <TagSearch option={props.option} searchBarID={ID}/> 

                <Divider/>
            </div>
        ))
    )
}

export default MultiTagSearchAndDisplay