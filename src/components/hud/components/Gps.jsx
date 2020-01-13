import React from 'react';

class Gps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      district: 'Район',
      street: 'Международная станция Якитики'
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="gps-main">
          <div className="gps-title">{this.state.district}</div>
          <div className="gps-txt">{this.state.street}</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Gps;
