import React from 'react';

import "./css/fibcertificate.css"
class FibCertificate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="fibcertificate-main" id="box">
          
        </div>
      </React.Fragment>
    )
  }
}
export default FibCertificate;
