import './App.css';
import { RecoilRoot } from 'recoil'
import UploadPage from './components/uploadSpace/uploadSpace'
import VerticalStep from './components/VerticalStep/VerticalStep'
import TagSearch from './components/TagSearch/TagSearch'
import { Divider } from 'antd'
import TagsDisplay from './components/TagsDisplay/TagsDisplay'

function App() {
  return (
    <RecoilRoot>
        {/* <VerticalStep/>
        <UploadPage/> */}
        <TagsDisplay/>
        <Divider/>
        <TagSearch/>
    </RecoilRoot>
  );
}

export default App;
