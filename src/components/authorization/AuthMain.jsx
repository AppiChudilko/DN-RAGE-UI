import React from 'react';
import './css/authorization.css';
import './css/adaptive.css';
import './fonts/style.css'
import Authorization from './Pages/Authorization';

class AuthMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="auth-main">
          <div className="bg-left">
            <div className="position-bg-top">
              <div className="auth-bg-top"></div>
            </div>
            <div className="position-bg-bottom">
              <div className="auth-bg-bottom"></div>
            </div>
          </div>
          <div className="bg-right" id="bg-right">
            <div className="auth-bg-right"></div>
          </div>
          <div className="auth-content">
            <Authorization />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default AuthMain;
