import React from 'react';
import './css/base.css'
import './css/adaptive.css'
import './fonts/style.css'
import AuthMain from './components/authorization/AuthMain';
import EditorMain from './components/editorplayer/EditorMain';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <AuthMain />
      </div>
      <div className="adaptive_editor">
        <EditorMain />
      </div>
    </React.Fragment>
  );
}

export default App;
