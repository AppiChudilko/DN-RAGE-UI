import React from 'react';

class RegRight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="input-auth">
          <div className="strok1">
            <input type="text" name="login" className="input-reg input-reg-right" placeholder="логин" onChange={this.props.valueLogin} />
            <input type="text" name="login" className="input-reg" placeholder="E-MAIL" onChange={this.props.valueLogin} />
          </div>
          <div className="strok2">
            <input type="password" name="login" className="input-reg input-reg-right" placeholder="пароль" onChange={this.props.valueLogin} />
            <input type="password" name="login" className="input-reg" placeholder="повторите ПАРОЛЬ" onChange={this.props.valueLogin} />
          </div>
        </div>
        <div className="reg-checkbox">
          <input type="checkbox" name="chek1" id="chk1" className="chk-reg-inpt" defaultChecked={this.props.checked} onChange={this.props.checkedPoli} />
          <label className="chk_reg" htmlFor="chk1">
            <div className="chk-circle"></div>
            <span>Согласен с правилами проекта и принимаю условия</span>
          </label>
        </div>
        <div className="button-reg">ГОТОВО</div>
      </React.Fragment>
    )
  }
}
export default RegRight;
