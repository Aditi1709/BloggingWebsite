import React from 'react';
import TextEditor from './TextEditor.js'
import TitleBar from './TitleBar.js'
import Title from './Title.js'


function App() {
  return (
      <div class="App">
      <TitleBar/>
      <center>
      <div class="editor">
        <Title/>
        <br></br>
      <TextEditor/>
      </div>
      </center>
      </div>
  );
}

export default App;
