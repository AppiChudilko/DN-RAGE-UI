import React from 'react';
import './css/notification.css'

class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,

      type: 1,
      position: 'center', //leftTop,left,leftBottom,centerTop,center,centerBottom,rightTop,right,rightBottom
      icon: 'unicorm', //unicorm
      title: 'Уведомление', //Для type 2 title: '!'
      text: 'Пробный текст',
      value: ['Да', 'Нет']
    }
  }
  render() {
    const styleNotifi = `notifi-type notifi-position-${this.state.position}`
    const styleIcons = `icons-${this.state.icon}`
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className={styleNotifi} id="box">
          {this.state.type === 0 ?
            <div className="notifi-first-box">
              <div className="notifi-f-main">
                <div className="notifi-close"></div>
                <div className="notifi-text-box">{this.state.text}</div>
              </div>
              <div className="notifi-btn">
                {this.state.value.map((e, i) => {
                  let index = `notifibtnt${i}`
                  return (
                    <div className="n-btn-box" key={index}>{e}</div>
                  )
                })}
              </div>
            </div>
            : null}
          {this.state.type === 1 ?
            <div className="notifi-first-box">
              <div className="notifi-linear-left"></div>
              <div className="notifi-linear-rightbottom"></div>
              <div className="notifi-f-main">
                <div className="notifi-head">
                  {this.state.title !== "" ?
                    <div className="notifi-title">
                      {this.state.icon !== "" ?
                        <div className="notifi-icons">
                          <div className={styleIcons}></div>
                        </div>
                        : null}
                      {this.state.title}
                    </div>
                    : null}
                  <div className="notifi-close"></div>
                </div>
                <div className="notifi-text-box">{this.state.text}</div>
              </div>
              <div className="notifi-btn">
                {this.state.value.map((e, i) => {
                  let index = `notifibtnt${i}`
                  return (
                    <div className="n-btn-box" key={index}>{e}</div>
                  )
                })}
              </div>
            </div>
            : null}
          {this.state.type === 2 ?
            <div className="notifi-first-box">
              <div className="notifi-f-main">
                <div className="notifi-linear-left-two"></div>
                <div className="notifi-linear-bottom"></div>
                <div className="notifi-linear-bottom-littel"></div>
                <div className="notifi-head">
                  {this.state.title !== "" ?
                    <div className="notifi-title-text">{this.state.title}</div>
                    : null}
                  <div className="notifi-close"></div>
                </div>
                <div className="notifi-text-box-last">{this.state.text}</div>
              </div>
              <div className="notifi-btn">
                {this.state.value.map((e, i) => {
                  let index = `notifibtnt${i}`
                  return (
                    <div className="n-btn-box" key={index}>{e}</div>
                  )
                })}
              </div>
            </div>
            : null}
        </div>
      </React.Fragment>
    )
  }
}
export default Notification;
