import React from 'react';

import "./css/fibcertificate.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"

class FibCertificate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      player_info: {
        name: 'Olejka Pelmeshka',
        sex: 'М',
        position: 'Специальный агент',
        dob: '01.01.1989',
        id: '25',
        img: '',//https://a.rsg.sc//n/lendstoun
      },
      photo: '',
    }
  }
  componentDidMount() {
    this.checkSexandImg();
  }
  checkSexandImg() {
    if (this.state.player_info.img === '') {
      if (this.state.player_info.sex === 'М') {
        this.setState({ photo: img_man });
      } else {
        this.setState({ photo: img_woman });
      }
    } else {
      this.setState({ photo: this.state.player_info.img })
    }

  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="fibcertificate-main" id="box">
          <div className="fib-box">
            <div className="back-fib">
              <div className="fib-cert">
                <div className="fib-sticker"> <span className="fib-txt-stic">FIB</span> </div>
                <div className="fib-pl-inf">
                  <div className="fib-img">
                    <img src={this.state.photo} className="style-img-fib" alt="" />
                  </div>
                  <div className="fib-second-inf">
                    <div className="fib-name">{this.state.player_info.name}</div>
                    <div className="box-fib-inf-tt">
                      <span className="fib-grow ff-rr-kk">Должность</span>
                      <span className="fib-black">{this.state.player_info.position}</span>
                    </div>
                    <div className="box-fib-inf-tt">
                      <span className="fib-grow ff-rr-kk">Дата рождения</span>
                      <span className="fib-black">{this.state.player_info.dob}</span>
                    </div>
                    <div className="box-fib-inf-tt">
                      <span className="fib-grow pp-aaa">Пол</span>
                      <span className="fib-black">{this.state.player_info.sex}</span>
                      <span className="fib-black kk-ll-pp">№{this.state.player_info.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default FibCertificate;
