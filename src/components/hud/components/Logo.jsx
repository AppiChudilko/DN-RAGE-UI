import React from 'react';

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      date: '01.12',
      time: '12:00',
      online: '1000',
      max_player: '1000',
      id: '0001',
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="logo-main">
          <div className="logo-info">
            <div className="span-bold">{this.state.date} | {this.state.time}</div>
            <div>ИГРОКОВ: {this.state.online}/{this.state.max_player} | <span className="span-bold">ID: {this.state.id}</span></div>
          </div>
          <div className="logo-img"></div>
        </div>
      </React.Fragment>
    )
  }
}
export default Logo;
