import './App.css';
import { RecoilRoot } from 'recoil'
import TagSearch from './components/TagSearch/TagSearch'
import { Divider } from 'antd'
import VerticalStep from './components/VerticalStep/VerticalStep'
import TagsDisplay from './components/TagsDisplay/TagsDisplay'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'

import TutorialPage from './pages/TutorialPage'
import LoginPage from './pages/LoginPage'
import TagDisplay from './components/TagsDisplay/TagsDisplay';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path='/demo/autolable'><TagsDisplay/></Route>
          <Route path='/demo/userlable'><TagsDisplay/></Route>
          <Route path='/demo/browse'><TagsDisplay/></Route>
          <Route path='/demo/start'><TagsDisplay/></Route>
          <Route path='/demo'><TutorialPage/></Route>
          <Route path='/'><LoginPage/></Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
