import React from 'react';

import "./css/license.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"

class License extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      player_info: {
        name: 'Olejka Pelmeshka',
        sex: 'Мужской',
        license: 'оружие',
        date_start: '01.01.2019',
        date_stop: '01.01.2020',
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
      if (this.state.player_info.sex === 'Мужской') {
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
        <div className="license-main" id="box">
          <div className="lic-box">
            <div className="lic-in-box">
              <div className="lic-left">
                <div className="lic-photo_player">
                  <img src={this.state.photo} className="lic-img" alt="" />
                </div>
              </div>
              <div className="lic-right">
                <div className="lic-name">{this.state.player_info.name}</div>
                <div className="lic-info">
                  <div className="lic-grow tsp-lic tsp-fff">Тип лицензии</div>
                  <div className="lic-white tsp-lic">Лицензия на {this.state.player_info.license}</div>
                  <div className="lic-first-inf">
                    <div className="tpc-right-ff">
                      <div className="lic-grow">Дата выдачи</div>
                      <div className="lic-white">{this.state.player_info.date_start}</div>
                    </div>
                    <div>
                      <div className="lic-grow">Дата окончания</div>
                      <div className="lic-white">{this.state.player_info.date_stop}</div>
                    </div>
                  </div>
                </div>
                <div className="big-letter">B</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default License;
