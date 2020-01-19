import React from 'react';

class UFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.checkboxChange = this.checkboxChange.bind(this)
  }
  callback = (action, ...args) => {
    console.log(action, this.props.menu, this.props.id, ...args)
  }
  buttonClick(params) {
    this.callback('button', params);
  }
  checkboxChange(event, params) {
    this.callback('checkbox', event.target.checked, params);
  }
  getCheckbox(isChecked, params) {
    let uid = Math.random().toString(36).substr(2, 9);
    return (
      <React.Fragment>
        <input className="tgl tgl-light" type="checkbox" defaultChecked={isChecked} id={uid} onChange={e => this.checkboxChange(e, params)} />
        <label className="tgl-btn" htmlFor={uid}></label>
      </React.Fragment>
    )
  }

  getButtom(text, params) {
    let uid = Math.random().toString(36).substr(2, 9);
    return (
      <React.Fragment>
        <input value={text} type="submit" id={uid} onChange={e => this.checkboxChange(e, params)} />
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment >
        <div className="u-menu-l">
          {(this.props.type === 1) ?
            <React.Fragment>
              <div className="l-title" onClick={() => this.buttonClick(this.props.item.params)}>
                <div className="txt-title">{this.props.item.title}</div>
                <div className="txt-lasttitle">{this.props.item.text}</div>
              </div>
            </React.Fragment> : ''
          }
          {(this.props.type === 2) ?
            <React.Fragment>
              <div className="l-title">
                <div className="txt-title">{this.props.item.title}</div>
                <div className="txt-lasttitle">{this.props.item.text}</div>
              </div>
              {this.getCheckbox(this.props.item.value,this.props.item.params)}
            </React.Fragment> : ''
          }
          {(this.props.type === 3) ?
            <React.Fragment>
              <div className="mobile-profile">
                <img className="m-player-photo" src={this.props.item.value} />
                <div className="m-player-info">
                  <div className="m-name-player">{this.props.item.title}</div>
                  <div className="m-email-player">{this.props.item.text}</div>
                </div>
              </div>
            </React.Fragment> : ''
          }
          {(this.props.type === 4) ?
            <React.Fragment>
              <div className="l-title">
                <div className="txt-title">{this.props.item.title}</div>
                <div className="txt-lasttitle">{this.props.item.text}</div>
              </div>
              {this.getButtom('test2', this.props.item.params)}
            </React.Fragment> : ''
          }

        </div>
      </React.Fragment>
    )
  }
}
export default UFrame;
