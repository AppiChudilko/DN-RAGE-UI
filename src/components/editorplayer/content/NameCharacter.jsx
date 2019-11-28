import React from 'react';
import SliderArrow from './Elements/SliderArrow';
import { Link } from "react-router-dom";

class NameCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cheked_sex: false,
      slider: [
        {
          title: "Мать",
          parents: ["Lesya", "Masha", "Kristina"],
          index_help: 0,
        },
        {
          title: "Отец",
          parents: ["Kirill", "Andrey", "Vasya"],
          index_help: 0
        },
        {
          title: "Сходство",
          index_help: 10
        },
        {
          title: "Кожа",
          index_help: 10
        }
      ],
      stats_parents: [
        [
          { endurance: 10, strength: 20, shooting: 15, stealth: 20, flying: 10, driving: 10, psychics: 5 },
          { endurance: 20, strength: 10, shooting: 10, stealth: 10, flying: 25, driving: 35, psychics: 15 },
          { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        ],
        [
          { endurance: 5, strength: 15, shooting: 5, stealth: 35, flying: 10, driving: 20, psychics: 10 },
          { endurance: 25, strength: 5, shooting: 10, stealth: 5, flying: 10, driving: 35, psychics: 20 },
          { endurance: 10, strength: 20, shooting: 15, stealth: 20, flying: 15, driving: 20, psychics: 15 },
        ]
      ],
      stats: {
        endurance: 80,
        strength: 60,
        shooting: 50,
        stealth: 20,
        flying: 30,
        driving: 10,
        psychics: 0
      }
    }
  }

  updateStats() {
    console.log(this.state.slider[0].index_help)
    console.log(this.state.slider[1].index_help)
    let new_stats = {
      endurance: this.state.stats_parents[0][this.state.slider[0].index_help].endurance + this.state.stats_parents[1][this.state.slider[1].index_help].endurance,
      strength: this.state.stats_parents[0][this.state.slider[0].index_help].strength + this.state.stats_parents[1][this.state.slider[1].index_help].strength,
      shooting: this.state.stats_parents[0][this.state.slider[0].index_help].shooting + this.state.stats_parents[1][this.state.slider[1].index_help].shooting,
      stealth: this.state.stats_parents[0][this.state.slider[0].index_help].stealth + this.state.stats_parents[1][this.state.slider[1].index_help].stealth,
      flying: this.state.stats_parents[0][this.state.slider[0].index_help].flying + this.state.stats_parents[1][this.state.slider[1].index_help].flying,
      driving: this.state.stats_parents[0][this.state.slider[0].index_help].driving + this.state.stats_parents[1][this.state.slider[1].index_help].driving,
      psychics: this.state.stats_parents[0][this.state.slider[0].index_help].psychics + this.state.stats_parents[1][this.state.slider[1].index_help].psychics
    }
    console.log(new_stats)
    this.setState({
      stats: new_stats
    })
  }

  reset() {
    this.setState(prev => ({
      ...prev.slider[0].index_help = 0,
      ...prev.slider[1].index_help = 0,
      ...prev.slider[2].index_help = 10,
      ...prev.slider[3].index_help = 10,
    }, this.updateStats()));
  }
  chekedSex() {
    this.setState({ cheked_sex: !this.state.cheked_sex })
  }
  clickLeftArrow(index) {
    if (index > 1) {
      let currentIndex = this.state.slider[index].index_help;
      if (currentIndex <= 0) {
        currentIndex = 0;
      } else {
        currentIndex--;
      }
      this.setState(prev => ({ ...prev.slider[index].index_help = currentIndex }));
      return;
    }
    let array = this.state.slider[index].parents
    let currentIndex = this.state.slider[index].index_help;
    if (currentIndex === 0) {
      currentIndex = (array.length - 1);
    } else {
      currentIndex--;
    }
    this.setState(prev => ({ ...prev.slider[index].index_help = currentIndex }, this.updateStats()));
  }
  clickRightArrow(index) {
    if (index > 1) {
      let currentIndex = this.state.slider[index].index_help;
      if (currentIndex >= 20) {
        currentIndex = 20;
      } else {
        currentIndex++;
      }
      this.setState(prev => ({ ...prev.slider[index].index_help = currentIndex }));
      return;
    }
    let array = this.state.slider[index].parents
    let currentIndex = this.state.slider[index].index_help;
    if (currentIndex === array.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    this.setState(prev => ({ ...prev.slider[index].index_help = currentIndex }, this.updateStats()));
  }

  render() {
    return (
      <React.Fragment>
        <div className="menu-editor-default">
          <div className="title-block">Данные</div>
          <span className="title-in-block">Введите имя</span>
          {/* <div className="auth-input">
            <input type="text" placeholder="введите логин" name="login-auth" className="auth-input-style"  />
            <input type="password" placeholder="введите пароль" name="password-auth" className="auth-input-style"  />
          </div> */}

          <div className="change-button-box">
            <SliderArrow
              index={0}
              index_help={this.state.slider[0].index_help}
              title={this.state.slider[0].title}
              name_array={this.state.slider[0].parents}
              clickLeftArrow={this.clickLeftArrow.bind(this)}
              clickRightArrow={this.clickRightArrow.bind(this)}
            />
            <SliderArrow
              index={1}
              index_help={this.state.slider[1].index_help}
              title={this.state.slider[1].title}
              name_array={this.state.slider[1].parents}
              clickLeftArrow={this.clickLeftArrow.bind(this)}
              clickRightArrow={this.clickRightArrow.bind(this)}
            />
            <SliderArrow
              index={2}
              index_help={this.state.slider[2].index_help}
              title={this.state.slider[2].title}
              name_array={this.state.slider[2].index_help * 5}
              clickLeftArrow={this.clickLeftArrow.bind(this)}
              clickRightArrow={this.clickRightArrow.bind(this)}
            />
            <SliderArrow
              index={3}
              index_help={this.state.slider[3].index_help}
              title={this.state.slider[3].title}
              name_array={this.state.slider[3].index_help * 5}
              clickLeftArrow={this.clickLeftArrow.bind(this)}
              clickRightArrow={this.clickRightArrow.bind(this)}
            />
          </div>
          <div className="characteristic-editor">
            <div className="box-character">
              <span className="title-character">Выносливость</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.endurance + "%" }} ></div>
              </div>
            </div>
            <div className="box-character">
              <span className="title-character">Сила</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.strength + "%" }}></div>
              </div>
            </div>
            <div className="box-character">
              <span className="title-character">Стерльба</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.shooting + "%" }}></div>
              </div>
            </div>
            <div className="box-character">
              <span className="title-character">Скрытность</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.stealth + "%" }}></div>
              </div>
            </div>
            <div className="box-character">
              <span className="title-character">Полет</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.flying + "%" }}></div>
              </div>
            </div>
            <div className="box-character">
              <span className="title-character">Вождение</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.driving + "%" }}></div>
              </div>
            </div>
            <div className="box-character">
              <span className="title-character">Психика</span>
              <div className="range-character">
                <div className="background-character-range" style={{ width: this.state.stats.psychics + "%" }}></div>
              </div>
            </div>
          </div>
          <div className="editor-circl-change">
            <div className="circle-change circle-blue"></div>
            <div className="circle-change"></div>
            <div className="circle-change"></div>
          </div>
          <div className="last-button-menu">
            <div className="box-last-btn">Назад</div>
            <div className="box-last-btn" onClick={this.reset.bind(this)}>Сброс</div>
          </div>
          <Link to="/editor/family-character">
            <div className="next-button-menu">
              <div className="box-next-btn">Далее</div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
export default NameCharacter;
