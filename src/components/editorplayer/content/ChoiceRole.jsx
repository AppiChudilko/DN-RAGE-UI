import React from 'react';
import Role from './Elements/Role';

class ChoiceRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      info_player: [
        { player: { name: "Иммигрант", text: 'Иммигрируя из своей страны на корабле, вы доплываете до порта Лос-Сантоса, где с самыми нужными вещами, что вы успели забрать с собой, вас ждёт работа, на которой вы сразу же сможете заработать свои первые деньги.' } },
        { player: { name: "Приезжий", text: 'Прилетев на самолёте в Лос-Сантос, в опрятной одежде с первыми деньгами и телефоном, вам открыты все дороги для покорения города, который никогда не спит.'}  },
        { player: { name: "Бездомный", text: 'Очнувшись в окрестностях округа Блейн, в старой грязной одежде и без цента в кармане вам предстоит вернуться к нормальной жизни. Хорошо, что вы уже полноценный гражданин США, что облегчит ваш дальнейший путь.'}  }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="reg-main adaptive-reg">
        <div className="bg-left-create">
            <span className="title-dednet">Выбери свою роль</span>
            <div className="position-bg-bottom">
              <div className="create-bg-bottom" id="adaptive-bg-right"></div>
            </div>
          </div>
          <div className="bg-right-create">
            <div className="create-logo"></div>
            <div className="create-bg-right" id="adaptive-bg-right"></div>
          </div>
          <div className="create-content">
          <div className="main-box-change">         
            <Role
              index={0}
              name={this.state.info_player[0].player.name}              
              info_player={this.state.info_player}
              text_info={this.state.info_player[0].player.text}
            />
            <Role
              index={1}
              name={this.state.info_player[1].player.name}              
              info_player={this.state.info_player}
              text_info={this.state.info_player[1].player.text}
            />
            <Role
              index={2}
              name={this.state.info_player[2].player.name}              
              info_player={this.state.info_player}
              text_info={this.state.info_player[2].player.text}
            />
        </div>
          </div>
          </div>       
        
      </React.Fragment>
    )
  }
}
export default ChoiceRole;
