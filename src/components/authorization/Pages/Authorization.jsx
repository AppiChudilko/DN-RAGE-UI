import React from 'react';
import AuthLeft from './Content/AuthLeft';
import AuthRight from './Content/AuthRight';
import RegRight from './Content/RegRight';
import RegLeft from './Content/RegLeft';

class Authorization extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current_page: 'Авторизация',
      checked: false,
      login: '',
      password: '',
    }
    this.changePage = this.changePage.bind(this);
  }
  changePage(name) {
    this.setState({ current_page: name, });
  }
  valueLogin(event) {
    /*this.setState({
      login: event.target.value,
      password: event.target.value
  });
  console.log(this.state.login)*/
  }
  checkedPoli = () => {
    console.log("click")
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.current_page === "Авторизация" ?
          <AuthLeft />
          : null}
        {this.state.current_page === "Регистрация" ?
          <RegLeft />
          : null}
        <div className="content-right">
          <div className="menu-auth">
            <input type="radio" name="changemenu" id="changemenu1" defaultChecked onChange={() => this.changePage('Авторизация')} />
            <label htmlFor="changemenu1" className="box-menu-auth">
              <span>Авторизация</span>
            </label>
            <input type="radio" name="changemenu" id="changemenu2" onChange={() => this.changePage('Регистрация')} />
            <label htmlFor="changemenu2" className="box-menu-auth">
              <span>Регистрация</span>
            </label>
          </div>
          {this.state.current_page === "Авторизация" ?
            <AuthRight
              valueLogin={this.valueLogin.bind(this)}
            />
            : null}
          {this.state.current_page === "Регистрация" ?
            <RegRight
              valueLogin={this.valueLogin.bind(this)}
              checked={this.state.checked}
              checkedPoli={this.checkedPoli.bind(this)}
            />
            : null}

        </div>
      </React.Fragment>
    )
  }
}
export default Authorization;
