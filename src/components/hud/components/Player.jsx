import React from 'react';
import EventManager from "../../../EventManager";

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      microphone: false,
      drink: 100,
      eat: 100,
      wallet: "$98,999,550,381.45",
      card: "$98,999,550,381.45",
    }
  }

  componentDidMount() {
    EventManager.addHandler('hudp', value => {
      if(value.type === 'show') { this.setState({show: true})}
      else if(value.type === 'hide') { this.setState({show: false})}
      else if(value.type === 'updateValues') {
        this.setState({microphone: value.microphone});
        this.setState({drink: value.drink});
        this.setState({eat: value.eat});
        this.setState({wallet: value.wallet});
        this.setState({card: value.card});
      }
      else return;
    })
  }

  formatCurrency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="player-hud">
          <div className="mic">
            <div className={this.state.microphone ? 'mic-img use-mic' : 'mic-img'}></div>
          </div>
          <div className="needs">
            <div className="needs-box">
              <div className="img-drink"></div>
              <div className="liner-needs">
                <div className="color-liner" style={{ width: this.state.drink + '%' }}></div>
              </div>
              <div className="needs-text">{this.state.drink}%</div>
            </div>
            <div className="needs-box">
              <div className="img-eat"></div>
              <div className="liner-needs">
                <div className="color-liner" style={{ width: this.state.eat + '%' }}></div>
              </div>
              <div className="needs-text">{this.state.eat}%</div>
            </div>
          </div>
          <div className="money">
            <div className="money-box">
              <div className="img-wallet"></div>
              <div className="wallet-text">{this.state.wallet}</div>
            </div>
            <div className="money-box">
              <div className="img-credit-card"></div>
              <div className="credit-text">{this.state.card}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Player;
