import React from 'react';

class Scrollbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  callback = (action, ...args) => {
    console.log(action, args)
  }
  checkboxChange(event, params, uid) {
    console.log(event, params, uid)
    try {
      this.callback('checkbox', event.target.checked, uid, JSON.stringify(params));
    }
    catch (e) {
      console.log(e);
    }
  }
  getCheckbox(params) {
    let uid = Math.random().toString(36).substr(2, 9);
    return (
      <React.Fragment>
        <input type="radio" name="rangkk" className="u-checkbox-style" id={uid} onChange={e => this.checkboxChange(e, params, uid)} />
        <span className="checkbox-icon" htmlFor={uid}></span>
      </React.Fragment>
    )
  }
  render() {
    if (!this.props.data.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="u-scrollable">
          <div className="u-scrool-box">
            <div className="u-scroll-title">Выберите ранг</div>
            <div className="u-selet-rang">
              {this.props.data.list.map((e, i) => {
                let index = `umenulist${i}`
                return (
                  <div className="u-select-box" key={index}>
                    <span className="checkbox checkbox-circle">
                      {this.getCheckbox(e.params)}
                    </span>
                    <span>{e.title}</span>
                  </div>
                )
              })}
            </div>
            <div className="u-select-input">
              <div className="u-btn-w" onClick={this.props.closeScrollbar}>Закрыть</div>
              <div className="u-btn-w" onClick={this.props.closeScrollbar}>Принять</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Scrollbar;
