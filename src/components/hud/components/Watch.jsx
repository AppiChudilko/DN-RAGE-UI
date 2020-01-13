import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      time: '14:00',
      date: '13.01.2020',
      temp: '20',
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="watch-main">
          <div className="time-box">
            <div className="time">{this.state.time} <div className="time-img-watch"></div></div>
            <div className="date">{this.state.date}</div>
          </div>
          <div className="degrees">{this.state.temp}°C</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Watch;
