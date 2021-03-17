import './App.css';
import { RecoilRoot } from 'recoil'
import UploadPage from './components/uploadSpace/uploadSpace'
import VerticalStep from './components/VerticalStep/VerticalStep'
import TagSearch from './components/TagSearch/TagSearch'

function App() {
  return (
    <RecoilRoot>
        <VerticalStep/>
        <UploadPage/>
        <TagSearch/>
    </RecoilRoot>
  );
}

export default App;
