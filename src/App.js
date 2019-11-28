import React from 'react';
import './css/base.css'
import './css/adaptive.css'
import './fonts/style.css'
import AuthMain from './components/authorization/AuthMain';
import EditorPlayer from './components/editorplayer/EditorPlayer';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <AuthMain />
        <EditorPlayer />
      </div>
    </React.Fragment>
  );
}

export default App;
