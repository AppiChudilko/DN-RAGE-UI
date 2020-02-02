import React from 'react';
import EventManager from "../../../EventManager";

class Gps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      district: 'Район',
      street: 'Международная станция Якитики',
      color: '#48B9F2',
      background: 0.5,
    }
  }

  componentDidMount() {
    EventManager.addHandler('hudg', value => {
      if(value.type === 'show') { this.setState({show: true})}
      else if(value.type === 'hide') { this.setState({show: false})}
      else if(value.type === 'updateValues') {
        this.setState({show: value.isShow});
        this.setState({district: value.district});
        this.setState({street: value.street});
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
        <div className="gps-main" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
          <div className="gps-title" style={this.state}>{this.state.district}</div>
          <div className="gps-txt">{this.state.street}</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Gps;
