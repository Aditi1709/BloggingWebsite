import React from 'react';
import TextEditor from './components/TextEditor.js'
import TitleBar from './components/TitleBar.js'
import './App.css'
import Profile from './components/Profile.js';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div class="App">
      <TitleBar/>
      <Switch>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/createblog" component={TextEditor}></Route>
      </Switch>
      </div>
    </Router>
       
  );
}

export default App;
