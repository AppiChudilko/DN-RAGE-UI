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
import Walkietalkie from './components/walkietalkie/Walkietalkie';
import WorkID from './components/workid/WorkID';
import ModalInput from './components/modalinput/ModalInput';
import Notification from './components/notification/Notification';
import CarShop from './components/carshop/CarShop';
import Quickmenu from './components/quickmenu/Quickmenu';
import CircleMenu from './components/circlemenu/CircleMenu';

function App() {
  return (
    <React.Fragment>
      <EditorMain />      
      <CircleMenu />
      <div className="box" id="box">        
        <AuthMain />
        <Inventory />
        <Phone />  
        <Hud />
        <IDCard />
        <WorkID />
        <License />
        <Certificate />
        <Walkietalkie />
        <ModalInput />
        <Notification />
        <CarShop />
        <Quickmenu />
        </div>
    </React.Fragment>
  );
}

export default App;
