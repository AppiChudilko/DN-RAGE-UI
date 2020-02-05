import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';


import Avatar from '@material-ui/core/Avatar';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      render: false
    }
  }
  componentWillMount() {
    let chat = null;
    this.props.data.forEach((e) => {
      if (e.phone_number === this.props.messenger.current_chat) {
        chat = e;
      }
    })
    if (chat != null) {
      this.setState({ chat: chat, render: true, contact: this.props.getContactByNumber(chat.phone_number) })
    } else {
      this.setState({
        chat: {
          phone_number: this.props.messenger.current_chat,
          is_online: false, // был(а) в сети 12.01.2019
          last_login: '',
          message: []
        },
        render: true,
        contact: this.props.getContactByNumber(this.props.messenger.current_chat)
      })
    }
  }
  componentWillUnmount() {
    this.setState({ chat: {}, render: false, contact: null })
  }
  inputChange(message) {
    this.setState({ text: message.target.value })
  }
  sendMessage() {
    if (this.state.text === "") return;
    let text = this.state.text;
    this.setState(prev => ({
      ...prev.chat.message = [{
        type: 2,
        text: this.state.text,
        time: this.props.time
      }].concat(this.state.chat.message)
    }), () => {
      this.props.sendMessage(this.props.messenger.current_chat, this.state.chat);
    })
    this.setState({ text: '' });
  }
  render() {
    if (!this.state.render) return null;
    return (
      <React.Fragment >
        <div className="dedbit-menu">
          <div className="u-title" style={{ background: "#212D3B", height: 50 + 'px' }}>
            <div className="dedbit-u-texttittle">
              <MaterialIcon icon="arrow_back" size={18} color="#fff" onClick={() => this.props.setLink("/phone/android/messenger")} />
              {this.state.contact === null ?
                <Avatar alt="" src={'https://a.rsg.sc//n/socialclub'} className="m-img-sms-title"></Avatar>
                :
                <Avatar alt="" src={this.state.contact.img === '' || this.state.contact.img === undefined ? "" : this.state.contact.img} className="m-img-sms-title">{this.state.contact.name.substring(0, 1)}</Avatar>
              }
              <div className="u-title-row">
                <div className="dedbit-title-name">{this.state.contact !== null ? this.state.contact.name : this.state.chat.phone_number}</div>
                <div className="dedbit-title-text">{this.state.chat.online}</div>
              </div>
            </div>
          </div>
          <div className="messenger-main clm-reverse-chat">
            {this.state.chat.message.map((e, i) => {
              let index = `dedchat${i}`
              return (
                <React.Fragment key={index}>
                  {e.type === 0 ?
                    <div className="ded-meta-center"> <div className="dedmeta-text">{e.text}</div> </div>
                    : null}
                  {e.type === 1 ?
                    <div className="ded-messenge">
                      <div className="testmes ded-vxod">
                        <div className="block-sms-ded">{e.text}<div className="hide-time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.time}</div></div>
                        <div className="block-sms-info-time">{e.time}</div>
                      </div>
                    </div>
                    : null}
                  {e.type === 2 ?
                    <div className="ded-messenge isxod-left">
                      <div className="testmes ded-isxod">
                        <div className="block-sms-ded">{e.text}<div className="hide-time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.time}</div></div>
                        <div className="block-sms-info-time">{e.time}</div>
                      </div>
                    </div>
                    : null}
                </React.Fragment>
              )
            })}
          </div>
          <div className="ded-input-text">
            <MaterialIcon icon="insert_emoticon" size={22} color="#7D8B97" />
            <input type="text" placeholder="Введите сообщение..." className="ded-text-ipn" value={this.state.text} onChange={(e) => this.inputChange(e)} />
            <MaterialIcon icon="send" size={22} color="#67B1F8" onClick={() => this.sendMessage()} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Chat;
