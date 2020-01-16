import React from 'react';
import './css/hud.css'
import Player from './components/Player';
import Car from './components/Car';
import Gps from './components/Gps';
import Watch from './components/Watch';
import Logo from './components/Logo';
import EventManager from "../../EventManager";
class Hud extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    EventManager.addHandler('hud', value => {
      if(value.type === 'show') { this.setState({show: true})}
      else if(value.type === 'hide') { this.setState({show: false})}
      else return;
    })
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
