import React from 'react';

class AuthLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="content-left">
          <div className="circle-auth">
            <div className="circle-a circle-change"></div>
            <div className="circle-a"></div>
          </div>
          <div className="logo-auth"></div>
          <div className="bg-auth"></div>
        </div>
      </React.Fragment>
    )
  }
}
export default AuthLeft;
