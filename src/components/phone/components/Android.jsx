import React from 'react';
import UMenu from './apps/UMenu';
import DefaultPage from './Android/DefaultPage';
import TopBar from './Android/TopBar';
import BottomBar from './Android/BottomBar';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Android extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '/phone/android/defaultpage',
      rotate: false,
      top_bar: {
        time: '12:01',
        battery: 10,
        wifi: 10,
        network: 10,
        temperature: '+25',
        date: '15 декабря'

      },
      apps: [
        { link: "/phone/android/umenu", img: 'apps' },
        { link: "/phone/android/umenu", img: 'maze' },
        { link: "/phone/android/umenu", img: 'pacific' },
        { link: "/phone/android/umenu", img: 'invader' },
        { link: "/phone/android/umenu", img: 'gps' },
        { link: "/phone/android/umenu", img: 'settings' },
        { link: "/phone/android/umenu", img: 'cont' },
        { link: "/phone/android/umenu", img: 'sms' },
      ],

      menu: {
        UUID: '11223',
        title: 'Настройки',
        items: [
          {
            title: "Nika Kondr",
            text: "nika.kondr@ded.net",
            type: 3,
            value: 'https://a.rsg.sc//n/socialclub', //TODO Передаем сюда socialclub и получаем аватар
            params: {}
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            type: 1,
            params: {}
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            type: 2,
            value: true,
            params: {}
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            type: 2,
            value: false,
            params: {}
          },
          {
            title: "Test громкость",
            text: "",
            type: 4,
            value: false,
            params: {}
          },
        ]
      },
      topbar_color: false,
    }
  }
  rotateAndroid() {
     this.setState({ rotate: !this.state.rotate }) //нужно придумать на какое действие перевернуть телефон
  }
  clickApps(event, i) {
    if (event.link == "/phone/android/umenu") {
      this.setState({ topbar_color: true })
      this.setState({ path: event.link })
    }
    console.log(event)
  }
  clickBack() {
    this.setState({ topbar_color: false });
    this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
  }
  clickHome() {
    this.setState({ topbar_color: false });
    this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
  }
  render() {
    return (
      <React.Fragment >
        <div className={this.state.rotate ? "android-phone rotate-androind" : "android-phone"}>
          <div className="phone-bg bg-1">
            <div className={this.state.rotate ? "rotate-components" : null}>
              <TopBar umenu={this.state.topbar_color} data={this.state.top_bar} />
              <Router>
                <Route exact path="/phone/android/defaultpage">
                  <DefaultPage data={this.state.apps} clickApps={this.clickApps.bind(this)} top_bar={this.state.top_bar} />
                </Route>
                <Route exact path="/phone/android/umenu">
                  <UMenu data={this.state.menu} clickBack={this.clickBack.bind(this)} rotateAndroid={this.rotateAndroid.bind(this)} />
                </Route>
                <Redirect to={this.state.path} push />
              </Router>
              <Router>
                <BottomBar clickBack={this.clickBack.bind(this)} clickHome={this.clickHome.bind(this)} rotateAndroid={this.rotateAndroid.bind(this)}/>
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Android;
