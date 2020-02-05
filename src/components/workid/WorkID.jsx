import React from 'react';

import "./css/workid.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"

class WorkID extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      player_info: {
        firstname: 'Olejka',
        lastname: 'Pelmeshka',
        sex: 'Мужской',
        age: 30,
        first_work: 'Строитель',
        second_work: 'Таксист',
        lvl_work: '10',
        experience: '2',
        data: '05.02.2020',
        idwork: '00252',
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
            <div className="osn-idcard">
              <div className="clm-1-idcard">WORK CARD</div>
              <div className="clm-2-idcard">
                <div className="plash_left">
                  <div className="photo_player">
                    <img src={this.state.photo} className="img-size-card" alt="" />
                  </div>
                </div>
                <div className="plash_right">
                  <div className="pl-clm-inf-n name-styl-id name-pff">
                    <span className="pl-grow tsp-topname">Имя</span>
                    <span className="pl-black">{this.state.player_info.firstname}</span>
                  </div>
                  <div className="pl-clm-inf-n name-styl-id name-pff btm-last">
                    <span className="pl-grow tsp-topname">Фамилия</span>
                    <span className="pl-black">{this.state.player_info.lastname}</span>
                  </div>
                  <div className="pl_inf">
                    <div className="pl-row">
                      <div className="pl_sex_2">
                        <span className="pl-grow row-tsp otsp_work">Пол</span>
                        <span className="pl-black">{this.state.player_info.sex}</span>
                      </div>
                      <div className="pl-age">
                        <span className="pl-grow row-tsp otsp_work">Возраст</span>
                        <span className="pl-black">{this.state.player_info.age} лет</span>
                      </div>
                    </div>
                    <div className="pl-row">
                      <div className="pl-workcard">
                        <span className="pl-grow row-tsp otsp_work">Основная работа</span>
                        <span className="pl-black">{this.state.player_info.first_work}</span>
                      </div>
                      <div className="pl-work2">
                        <span className="pl-grow row-tsp otsp_work">Вторая работа</span>
                        <span className="pl-black">{this.state.player_info.second_work} лет</span>
                      </div>
                    </div>
                    <div className="pl-row">
                      <div className="pl-workcard">
                        <span className="pl-grow row-tsp otsp_work">Уровень рабочего</span>
                        <span className="pl-black">{this.state.player_info.lvl_work}</span>
                      </div>
                      <div className="pl-work2">
                        <span className="pl-grow row-tsp otsp_work">Опыт рабочего</span>
                        <span className="pl-black">{this.state.player_info.experience} лет</span>
                      </div>
                    </div>
                    <div className="pl-row">
                      <div className="pl-workcard">
                        <span className="pl-grow row-tsp otsp_work">Дата получения</span>
                        <span className="pl-black">{this.state.player_info.data}</span>
                      </div>
                      <div className="pl-work2">
                        <span className="pl-grow row-tsp otsp_work">№ Документа</span>
                        <span className="pl-black">{this.state.player_info.idwork} лет</span>
                      </div>
                    </div>
                    {/* <div className="pl-clm">
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
                  </div> */}
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
export default WorkID;
