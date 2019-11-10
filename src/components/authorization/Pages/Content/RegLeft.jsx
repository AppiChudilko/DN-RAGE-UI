import React from 'react';

class RegLeft extends React.Component {
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
            <div className="circle-a"></div>
            <div className="circle-a circle-change"></div>
          </div>
          <div className="logo-reg"></div>
          <div className="bg-reg"></div>
        </div>
      </React.Fragment>
    )
  }
}
export default RegLeft;
