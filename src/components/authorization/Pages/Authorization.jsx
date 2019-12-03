import React from 'react';
import { Link } from "react-router-dom";


class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAuto: true,
            acceptRules: false,

            login: '',
            password: '',
            mailReg: '',
            loginReg: '',
            passwordReg: '',
            passwordRegCheck: '',
            pagePlayer: ''
        }
    };

    handleChange(value) {
        this.setState({ showAuto: value });
    };
    valueLogin(event) { this.setState({ login: event.target.value.replace(/[^a-zA-Z0-9]+/g,'') }) };
    valuePassword(event) { this.setState({ password: event.target.value }) };

    valueMailReg(event) { this.setState({ mailReg: event.target.value }) };
    valueLoginReg(event) { this.setState({ loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g,'') }) };

    valuePasswordReg(event) { this.setState({ passwordReg: event.target.value }) };
    valuePasswordRegCheck(event) { this.setState({ passwordRegCheck: event.target.value }) };

    clickLogin() {
        mp.trigger('client:user:auth:login', // eslint-disable-line
            this.state.login, this.state.password);
    };

    clickReg() {
        mp.trigger('client:user:auth:register', // eslint-disable-line
            this.state.mailReg, this.state.loginReg,
            this.state.passwordReg, this.state.passwordRegCheck,
            this.state.acceptRules);
    };

    acceptRules = () => {
        this.setState({
            acceptRules: !this.state.acceptRules
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="auth-main">
                    <div className="background-auth">
                        <div className="bg-left">
                            <div className="liner-top"></div>
                            {this.state.showAuto ?
                                <div className="bg-position-auth">
                                    <div className="bg-top-main">
                                        <div className="circle-box">
                                            <div className="circle active"></div>
                                            <div className="circle"></div>
                                        </div>
                                        <div className="bg-logo-auth"></div>
                                    </div>
                                    <div className="bg-change-auth"></div>
                                </div>
                                :
                                <div className="bg-position-auth">
                                    <div className="bg-top-main">
                                        <div className="circle-box">
                                            <div className="circle"></div>
                                            <div className="circle active"></div>
                                        </div>
                                        <div className="bg-logo-reg"></div>
                                    </div>
                                    <div className="bg-change-reg"></div>
                                </div>
                            }
                            <div className="bg-bottom"></div>
                        </div>
                        <div className="bg-right" id="adaptive-bg-right">
                            <div className="bg-right-auth"></div>
                        </div>
                    </div>
                    <div className="content-main">
                        <div className="content-auth">
                            <div className="button-main">
                                <input type="radio" id="btn-radio-auth1" name="btn-radio-auth" defaultChecked="true" onChange={() => this.handleChange(true)} />
                                <label htmlFor="btn-radio-auth1" className="button-auth">Авторизация</label>
                                <input type="radio" id="btn-radio-auth2" name="btn-radio-auth" onChange={() => this.handleChange(false)} />
                                <label htmlFor="btn-radio-auth2" className="button-auth">Регистрация</label>
                            </div>
                            {this.state.showAuto ?
                                <React.Fragment>
                                    <div className="auth-input">
                                        <input type="text" pattern="[a-zA-Z0-9]*" placeholder="введите логин" name="login-auth" className="auth-input-style" value={this.state.login} onChange={this.valueLogin.bind(this)} />
                                        <input type="password" placeholder="введите пароль" name="password-auth" className="auth-input-style" onChange={this.valuePassword.bind(this)} />
                                    </div>
                                    <div className="button-auth-click" onClick={this.clickLogin.bind(this)}>Войти</div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="auth-input">
                                        <div className="reg-bloc">
                                            <input type="text" pattern="[a-zA-Z0-9]*" placeholder="Придумайте логин" name="create-login" className="reg-input-style" onChange={this.valueLoginReg.bind(this)} />
                                            <input type="text" placeholder="Введите свой E-mail" name="create-email" className="reg-input-style" onChange={this.valueMailReg.bind(this)} />

                                        </div>
                                        <div className="reg-bloc">
                                            <input type="password" placeholder="Придумайте пароль" name="create-password" className="reg-input-style" onChange={this.valuePasswordReg.bind(this)} />
                                            <input type="password" placeholder="Повторите пароль" name="create-password-repeat" className="reg-input-style" onChange={this.valuePasswordRegCheck.bind(this)} />
                                        </div>
                                        <div className="reg-checkbox">
                                            <input type="checkbox" name="chek1" id="chk1" className="chk-reg-inpt" defaultChecked={this.state.acceptRules} onChange={this.acceptRules} />
                                            <label className="chk_reg" htmlFor="chk1">
                                                <div className="chk-circle"></div>
                                                <span>Согласен с правилами проекта и принимаю условия</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="button-auth-click" onClick={this.clickReg.bind(this)}>Готово</div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Authorization;
