import React from 'react';

class UMenuRight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  buttonClick() {
    this.props.event('button');
  }
  checkboxChange(event) {    
    this.props.event('checkbox', event.target.checked);
  }
  getCheckbox(isChecked) {
    let uid = Math.random().toString(36).substr(2, 9);
    return (
      <React.Fragment>
        <input className="tgl tgl-light" id="cb1" type="checkbox" defaultChecked={isChecked} id={uid} onChange={e => this.checkboxChange(e)} />
        <label className="tgl-btn" htmlFor={uid}></label>
      </React.Fragment>
    )
  }
  render() {
    return (
      <React.Fragment >
        
        {(this.props.type === 2) ?
          this.getCheckbox(true) : ''
        }
        {(this.props.type === 3) ?
          this.getCheckbox(false) : ''
        }
      </React.Fragment>
    )
  }
}
export default UMenuRight;
