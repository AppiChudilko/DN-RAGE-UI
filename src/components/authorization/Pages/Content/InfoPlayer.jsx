import React from 'react';

class InfoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
  }
  selectChar(index) {
    // console.log("Выбран персонаж с индексом " + index)
    //ивент на нажатие кнопки
  }
  componentDidMount() {
    this.changeImg();
  }
  changeImg() {
    let index = this.props.index;
    let array = this.props.info_player[index].player;
    
    let sex_array = array.sex;
    let old_array = array.old;

    if (sex_array === "w") {
      this.setState({ img: "player_women" });
    }
    else {
      if (old_array > 50) {
        this.setState({ img: "player_old" });
      } else {
        this.setState({ img: "player_young" });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="change-create-player">
          <div className="border-top"></div>
          <div className="info-player">
            <div className={this.state.img}></div>
            <div className="name-player-info">{this.props.name}</div>
            <div className="info-text-player">
              <div className="text-box">
                <span className="title-info-text">Возраст</span> <span className="text-box-blue">{this.props.old}</span>
              </div>
              <div className="text-box">
                <span className="title-info-text">Деньги</span> <span className="text-box-blue">{this.props.money} $</span>
              </div>
              <div className="text-box">
                <span className="title-info-text">Последний вход</span> <span className="text-box-blue">{this.props.date}</span>
              </div>
            </div>
            <div className="slider-home-player">
              <div className="button-slider-home trans-arr" onClick={() => this.props.clickLeftArrow(this.props.index)}></div>
              <span>{this.props.spawn[this.props.index_spawn]}</span>
              <div className="button-slider-home arro-right" onClick={() => this.props.clickRightArrow(this.props.index)}></div>
            </div>
            <div className="create-btn" onClick={() => this.selectChar(this.props.index)}>Войти</div>
          </div>
          <div className="border-bottom"></div>
        </div>
      </React.Fragment>
    )
  }
}
export default InfoPlayer;
