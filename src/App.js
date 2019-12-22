import React from 'react';
import './css/base.css'
import './css/adaptive.css'
import './fonts/style.css'
import './css/animate.css'
import AuthMain from './components/authorization/AuthMain';
import EditorMain from './components/editorplayer/EditorMain';
import Inventory from './components/inventory/Inventory';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <AuthMain />
        <Inventory />
      </div>
      <div className="adaptive_editor">
        <EditorMain />
      </div>
    </React.Fragment>
  );
}

export default App;
