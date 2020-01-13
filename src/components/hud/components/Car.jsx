import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      light: false,
      door: false,
      engine: false,
      fuel: 100,
      max_fuel: 200,// Максимальная вместимость топливного бака
      speed: 200,

      deg: -45,
    }
  }
  componentDidMount() {
    this.speed();
  }
  componentDidUpdate(prevProp, prevState) {
    if (this.state.speed !== prevState.speed) {
      this.speed();
    }
  }
  speed() { // Чуть позже добавлю перерисованный спидометр, ибо текущий с погрешностью
    if (this.state.speed <= 0) {
      this.setState({ deg: -45 })
    } else if (this.state.speed >= 400) {
      this.setState({ deg: 135 })
    } else if (this.state.speed <= 80) {
      let a = (((100 / 80) * this.state.speed) / 100) * 68 - 45;
      this.setState({ deg: a })
    } else if (this.state.speed > 80 && this.state.speed < 400) {
      let i = (this.state.speed / 400) * 190 - 45;
      this.setState({ deg: i })
    }
  }
  render() {
    let fuel_liner = (this.state.fuel * 100) / this.state.max_fuel;
    const speed_score = { transform: `rotate(${this.state.deg}deg)` };

    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="speedbox-main">
          <div className="speedbox">
            <div className="speedbox-score" style={speed_score}></div>
            <div className="speedbox-groove"></div>

          </div>
          <div className="backg-speed">
            <div className="speed-txt">{this.state.speed}</div>
          </div>
        </div>
        <div className="car-hud">
          <div className="elements-auto">
            <div className={this.state.light ? 'light-auto use-mic' : 'light-auto'}></div>
            <div className={this.state.door ? 'on-door-auto' : 'off-door-auto'}></div>
            <div className={this.state.engine ? 'key-auto use-mic' : 'key-auto'}></div>
          </div>
          <div className="bak-oil">
            <div className="oil-text">
              <div className="oil-tt">Топливо</div>
              <div className="oil-num">{this.state.fuel} L</div>
            </div>
            <div className="oil-liner">
              <div className="full-liner" style={{ width: fuel_liner + '%' }}></div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}
export default Car;
