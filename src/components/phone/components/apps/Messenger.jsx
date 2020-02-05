import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment >
        <div className="dedbit-menu">
          <div className="u-title" style={{ background: "#212D3B" }}>
            <span className="u-texttittle">Dedbit</span>
          </div>
          <div className="messenger-main">
            {this.props.data.map((e, i) => {
              let index = `umessagechatbox${i}`
              return (
                <div className="m-box-sms" key={index} onClick={() => this.props.selectChat(e.phone_number)}>
                  <img src="https://a.rsg.sc//n/socialclub" alt="" className="m-img-sms" />
                  <div className="m-box-messeng">
                    <div className="m-box-clm-mes">
                      <div className="mes-title">{this.props.getContactByNumber(e.phone_number) !== null ? this.props.getContactByNumber(e.phone_number).name : e.phone_number}</div>
                      <div className="mes-text">{e.message.length !== 0 ? e.message[0].text : ''}</div>
                    </div>
                    <div className="m-box-clm-info">
                      <div className="m-time">{e.message.length !== 0 ? e.message[0].time : ''}</div>
                      <div className="m-crl-box">1</div>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Messenger;
