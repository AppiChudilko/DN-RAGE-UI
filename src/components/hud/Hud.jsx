import React from 'react';
import './css/hud.css'
import Player from './components/Player';
import Car from './components/Car';
import Gps from './components/Gps';
import Watch from './components/Watch';
import Logo from './components/Logo';
class Hud extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="hud-main" id="box">
          <div className='hud-position-righttop'>
            <Logo />
          </div>
          <div className='hud-position-leftbottom'>
            <Watch />
            <Gps />
          </div>
          <div className="hud-position-rightbottom">
            <Car />
            <Player />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Hud;
