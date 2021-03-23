import './App.css';
import { RecoilRoot } from 'recoil'
import {} from 'antd'
import TagsDisplay from './components/TagsDisplay/TagsDisplay'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import TutorialPage from './pages/TutorialPage';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path='/demo/autolable'><TagsDisplay/></Route>
          <Route path='/demo/userlable'><TagsDisplay/></Route>
          <Route path='/demo'>
            <TutorialPage/>
          </Route>
          <Route path='/'><LoginPage/></Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
