/* eslint-disable */
import React from 'react';
import './css/phone.css'
import '../../css/animate.css'
import Android from './components/Android';
import EventManager from "../../EventManager";

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    EventManager.addHandler('phone', value => {
      if (value.type === 'switch') { this.setState({ show: !this.state.show }) }
      else return;
    })
  }

  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="box" id="box">
          <div className="phone-position">
            <Android />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Phone;
