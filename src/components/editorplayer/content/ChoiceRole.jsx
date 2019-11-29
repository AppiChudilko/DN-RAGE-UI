import React from 'react';
import Role from './Elements/Role';

class ChoiceRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      info_player: [
        { player: { name: "Бездельник", text: 'Ты будешь тем кого будут ебать налево и направо, но тебе будет на всех похуй, поверь.' } },
        { player: { name: "Работяга", text: 'Ты будешь хуярить на заводе сутками и у тебя в кармане будет всегда не больше 20$'}  },
        { player: { name: "Хацкер", text: 'Ты хакер, как Годвил, только уебищный и никчемный.'}  }
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
