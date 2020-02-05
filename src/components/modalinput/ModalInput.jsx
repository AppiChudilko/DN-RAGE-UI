import React from 'react';
import Autosize from 'autosize';
import './css/modalinput.css'

class ModalInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: 'А может и не может',
      value: ['yes', 'no', 'maybe'],
      params: { name: null },
      text: '',
    }
  }
  callback = (action, ...args) => {
    console.log(action, ...args)
    mp.trigger('client:modalinput:callBack', action, ...args); // eslint-disable-line
  }
  componentDidMount() {
    if (this.state.show) {
      this.textarea.focus();
      Autosize(this.textarea);
    }
    else return;
  }
  textChange(e) {
    this.setState({ text: e.target.value })
  }
  selecetButton(e, text) {
    try {
      console.log(e, text);
      this.setState({ show: false })
      this.callback('button', JSON.stringify(e), JSON.stringify(text));
    }
    catch (e) {
      console.log(e);
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="position-modal" id="box">
          <div className="main-input-modal">
            <div className="linear-input-modal-left"></div>
            <div className="linear-input-modal-bottom"></div>
            <div className="linear-input-modal-bottom-small"></div>
            <div className="modal-box-m">
              <div className="modal-b-title">{this.state.title}</div>
              <textarea ref={c => (this.textarea = c)} type="text" className="modal-b-input" onChange={(e => this.textChange(e))} />
            </div>
          </div>
          <div className="modal-box-input">
            {this.state.value.map((e, i) => {
              let index = `modalbtn${i}`
              return (
                <div className="modal-btn" key={index} onClick={() => this.selecetButton(e, this.state.text)}>{e}</div>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default ModalInput;
