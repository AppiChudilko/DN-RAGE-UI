import React from 'react';
import './css/base.css'
import './css/adaptive.css'
import './fonts/style.css'
import './css/animate.css'
import './fonts/Montserrat/stylesheet.css'
import AuthMain from './components/authorization/AuthMain';
import EditorMain from './components/editorplayer/EditorMain';
import Inventory from './components/inventory/Inventory';
import Phone from './components/phone/Phone';
import Hud from './components/hud/Hud';
import IDCard from './components/idcard/IDCard';
import License from './components/license/License';
import Certificate from './components/certificate/Certificate';

function App() {
  return (
    <React.Fragment>
        <AuthMain />
        <Inventory />
        <Phone />  
        <EditorMain />
        <Hud />
        <IDCard />
        <License />
        <Certificate />
    </React.Fragment>
  );
}

export default App;
