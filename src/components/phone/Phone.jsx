/* eslint-disable */
import React from 'react';
import './css/phone.css'
import '../../css/animate.css'
import Android from './components/Android';

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show:false
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
       <div className="phone-position">
         <Android />
       </div>
      </React.Fragment>
    )
  }
}
export default Phone;
