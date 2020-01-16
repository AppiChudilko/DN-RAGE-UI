import React from 'react';

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
              <div className="info-top">
                <div className="icon-network"></div>
                <span> 12:00</span>
              </div>
              <div className="info-time-box">
                <div className="time-date">
                  <div className="txt-time">15:25</div>
                  <div className="txt-date">15 декабря</div>

                </div>
                <div className="weather"><span>+25C</span> </div>
              </div>
              <div className="main-app-box">
                <div className="app-box"></div>
                <div className="app-box"></div>
                <div className="app-box"></div>
                <div className="app-box"></div>
                <div className="app-box"></div>
                <div className="app-box"></div>
                <div className="app-box"><div className="app-icon icons-settings"></div></div>
                <div className="app-box"><div className="app-icon icons-phone"></div></div>
              </div>
              </div>
      </React.Fragment>
    )
  }
}
export default DefaultPage;
