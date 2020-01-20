import React from 'react';

import "./css/idcard.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"

class IDCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      player_info: {
        name: 'Olejka Pelmeshka',
        sex: 'Мужской',
        age: 30,
        nation: 'Американец',
        regist: '',
        idcard: '00252',
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
        <div className="idcard-main" id="box">
          <div className="idcard_box">
            <div className="plash_left">
              <div className="photo_player">
                <img src={this.state.photo} className="img-size-card" />
              </div>
              <div className="box-for-liner">
                <div className="liner-shadow-card"></div>
              </div>
            </div>
            <div className="plash_right">
              <div className="liner-right-card">
                <span className="txt-lin">ID КАРТА</span>
              </div>
              <div className="player_name-card">{this.state.player_info.name}</div>
              <div className="pl_inf">
                <div className="pl-row">
                  <div className="pl-sex">
                    <span className="pl-grow row-tsp">Пол</span>
                    <span className="pl-black">{this.state.player_info.sex}</span>
                  </div>
                  <div className="pl-age">
                    <span className="pl-grow row-tsp">Возраст</span>
                    <span className="pl-black">{this.state.player_info.age}</span>
                  </div>
                </div>
                <div className="pl-clm">
                  <div className="pl-clm-inf">
                    <span className="pl-grow pl-clm-f">Национальность</span>
                    <span className="pl-black">{this.state.player_info.nation}</span>
                  </div>
                  <div className="pl-clm-inf">
                    <span className="pl-grow pl-clm-f">Регистрация</span>
                    <span className="pl-black">{this.state.player_info.regist === '' ? '--------------' : this.state.player_info.regist}</span>
                  </div>
                  <div className="pl-clm-inf">
                    <span className="pl-grow pl-clm-f">№ Документа</span>
                    <span className="pl-black">{this.state.player_info.idcard}</span>
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
export default IDCard;
