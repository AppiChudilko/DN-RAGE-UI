import React from 'react';
import EventManager from "../../../EventManager";

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

  componentDidMount() {
    EventManager.addHandler('hudl', value => {
      if(value.type === 'show') { this.setState({show: true})}
      else if(value.type === 'hide') { this.setState({show: false})}
      else if(value.type === 'updateValues') {
        this.setState({date: value.date});
        this.setState({time: value.time});
        this.setState({online: value.online});
        this.setState({max_player: value.max_player});
        this.setState({id: value.id});
      }
      else return;
    })
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
