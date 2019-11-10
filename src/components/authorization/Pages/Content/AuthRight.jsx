import React from 'react';

class AuthRight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="input-auth">
          <input type="text" name="login" className="input-login input-lg-ots" placeholder="ВВЕДИТЕ ЛОГИН" onChange={this.props.valueLogin} />
          <input type="password" name="login" className="input-login" placeholder="ВВЕДИТЕ ПАРОЛЬ" onChange={this.props.valueLogin} />
        </div>
        <div className="button-auth">ВОЙТИ</div>
      </React.Fragment>
    )
  }
}
export default AuthRight;
