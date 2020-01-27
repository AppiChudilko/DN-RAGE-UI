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
    mp.trigger('client:phone:callBack', action, this.props.menu, this.props.id, ...args); // eslint-disable-line
  }
  buttonClick(params) {
    try {
      this.callback('button', JSON.stringify(params));
    }
    catch (e) {
      console.log(e);
    }
  }
  checkboxChange(event, params) {
    try {
      this.callback('checkbox', event.target.checked, JSON.stringify(params));
    }
    catch (e) {
      console.log(e);
    }
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
        <div style={{ background: this.props.item.background }} className={this.props.item.clickable ? 'u-menu-l hoverable' : 'u-menu-l'} onClick={() => this.buttonClick(this.props.item.params)}>
          {(this.props.type === 0) ?
            <React.Fragment>
              <div className="umenu-mini-box">
              <div className="mobile-profile">
                <img className="m-player-photo" src={this.props.item.value} />
                <div className="m-player-info">
                  <div className="m-name-player">{this.props.item.title}</div>
                  <div className="m-email-player">{this.props.item.text}</div>
                </div>
              </div>
              </div>
            </React.Fragment> : ''
          }
          {(this.props.type === 1) ?
            <React.Fragment>
              <div className="umenu-mini-box" onClick={() => this.buttonClick(this.props.item.params)}>
              <div className="l-title">
                {this.props.item.img === '' || this.props.item.img === undefined ? null :
                  <React.Fragment>
                    <div className="umenu-icon">
                      <div className={`s-${this.props.item.img}`}></div>
                    </div>
                  </React.Fragment>
                }
                <div className="umenu-rov">
                  <div className="txt-title">{this.props.item.title}</div>
                  <div className="txt-lasttitle">{this.props.item.text}</div>
                </div>
              </div>
              </div>
            </React.Fragment> : ''
          }
          {(this.props.type === 2) ?
            <React.Fragment>
              <div className="umenu-mini-box">
              <div className="l-title">
                {this.props.item.img === '' ? null :
                  <React.Fragment>
                    <div className="umenu-icon">
                      <div className={`s-${this.props.item.img}`}></div>
                    </div>
                  </React.Fragment>
                }
                <div className="umenu-rov">
                  <div className="txt-title">{this.props.item.title}</div>
                  <div className="txt-lasttitle">{this.props.item.text}</div>
                </div>
              </div>
              {this.getCheckbox(this.props.item.value, this.props.item.params)}
              </div>
              
              
            </React.Fragment> : ''
          }
          {(this.props.type === 3) ?
            <React.Fragment>
              <div className="umenu-mini-box">
              <div className="l-title">
                {this.props.item.img === '' ? null :
                  <React.Fragment>
                    <div className="umenu-icon">
                      <div className={`s-${this.props.item.img}`}></div>
                    </div>
                  </React.Fragment>
                }
                <div className="umenu-rov">
                  <div className="txt-title">{this.props.item.title}</div>
                  <div className="txt-lasttitle">{this.props.item.text}</div>
                </div>
              </div>
              {this.getButtom('test2', this.props.item.params)}
              </div>
            </React.Fragment> : ''
          }
          {(this.props.type === 4) ?
              <React.Fragment>
                <div className="umenu-mini-box">
                  <div className="mobile-profile-1">
                    <img className="m-player-photo-1" src={this.props.item.value} style={{height: this.props.item.height + 'px'}}  />
                  </div>
                </div>
              </React.Fragment> : ''
          }

        </div>
      </React.Fragment>
    )
  }
}
export default UFrame;
