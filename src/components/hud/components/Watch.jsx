import React from 'react';
import EventManager from "../../../EventManager";

class Watch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      time: '14:00',
      date: '13.01.2020',
      temp: '+20*C',
      color: '#48B9F2',
      background: 0.5,
    }
  }

  componentDidMount() {
    EventManager.addHandler('hudw', value => {
      if(value.type === 'show') { this.setState({show: true})}
      else if(value.type === 'hide') { this.setState({show: false})}
      else if(value.type === 'updateValues') {
        this.setState({show: value.isShow});
        this.setState({time: value.time});
        this.setState({date: value.date});
        this.setState({temp: value.temp});
        this.setState({background: value.background});
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
        <div className="watch-main" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
          <div className="time-box">
            <div className="time">{this.state.time} <div className="time-img-watch"></div></div>
            <div className="date">{this.state.date}</div>
          </div>
          <div className="degrees">{this.state.temp}</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Watch;
