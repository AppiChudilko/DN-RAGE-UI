import React from 'react';
import { Link } from 'react-router-dom';

class DefaultPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment >
        <div className="android-content">
          {/* <div className="info-top">
                <div className="icon-network"></div>
                <span> 12:00</span>
              </div> */}
          <div className="info-time-box">
            <div className="time-date">
              <div className="txt-time">{this.props.top_bar.time}</div>
              <div className="txt-date">{this.props.top_bar.date}</div>
            </div>
            <div className="weather"><span>{this.props.top_bar.temperature}C</span> </div>
          </div>
          <div className="main-app-box">
            {this.props.data.map((e, i) => {
              const index = `appBox${i}`
              return (
                <Link to={e.link} className="app-box" onClick={() => this.props.clickApps(i)} key={index} >
                  <div className={`app-icon icons-${e.img}`}></div>
                </Link>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default DefaultPage;
