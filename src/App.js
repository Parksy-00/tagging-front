import './App.css';
import { RecoilRoot } from 'recoil'
import TagSearch from './components/TagSearch/TagSearch'
import { Divider } from 'antd'
import TagsDisplay from './components/TagsDisplay/TagsDisplay'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'

import LoginPage from './pages/LoginPage'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        {/* <VerticalStep/>
        <UploadPage/>
        <TagsDisplay/>
        <Divider/>
        <TagSearch/> */}
        <Switch>
          <Route path='/'><LoginPage/></Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
