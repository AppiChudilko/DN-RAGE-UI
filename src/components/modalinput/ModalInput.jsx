import React from 'react';
import './css/modalinput.css'

class ModalInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment >
        <div className="position-modal" id="box">
          <div className="main-input-modal">
          <div className="linear-input-modal-left"></div>
          <div className="linear-input-modal-bottom"></div>
          <div className="linear-input-modal-bottom-small"></div>
          <div className="modal-box-m">
            <div className="modal-b-title">Введите данные</div>
            <textarea type="text" className="modal-b-input"/>
          </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default ModalInput;