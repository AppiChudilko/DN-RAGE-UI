import React from 'react';
import UMenu from './apps/UMenu';
import DefaultPage from './Android/DefaultPage';
import TopBar from './Android/TopBar';
import BottomBar from './Android/BottomBar';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EventManager from "../../../EventManager";

class Android extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '/phone/android/defaultpage',
      rotate: false,
      top_bar: {
        time: '00:00',
        battery: 11, // max 11
        wifi: 2,
        network: 2, // max 5
        temperature: '+21°C',
        date: '15 декабря'

      },
      apps: [
        { link: "/phone/android/umenu", action: 'app', img: 'apps' },
        /*{ link: "/phone/android/umenu", action: 'maze', img: 'maze' },
        { link: "/phone/android/umenu", action: 'pacific', img: 'pacific' },
        { link: "/phone/android/umenu", action: 'invader', img: 'invader' },*/
        { link: "/phone/android/umenu", action: 'gps', img: 'gps' },
        //{ link: "/phone/android/umenu", action: 'settings', img: 'settings' },
        { link: "/phone/android/umenu", action: 'cont', img: 'cont' },
        { link: "/phone/android/umenu", action: 'sms', img: 'sms' },
      ],
      menu: {
        UUID: '11223',
        title: 'Настройки',
        items: [
          {
            title: 'Аккаунт',
            umenu: [
              {
                title: "Nika Kondr",
                text: "nika.kondr@ded.net",
                type: 0,
                value: 'https://a.rsg.sc//n/socialclub', //TODO Передаем сюда socialclub и получаем аватар
                params: { name: "null" }
              }
            ],
          },
          {
            title: 'Звук',
            umenu: [            
              {
                title: "Включить громкость",
                text: "Oписание",
                img: 'volume',
                type: 2,
                value: true,
                params: { name: "null" }
              },             
            ],
          },
          {
            title: 'Беспроводная сеть',
            umenu: [
              {
                title: "Wi-Fi",
                text: "",
                img: 'wifi',
                type: 2,
                value: true,
                params: { name: "null" }
              },
              {
                title: "Bluetooh",
                text: "",
                img: 'bluetooh',
                type: 2,
                value: false,
                params: { name: "null" }
              },              
            ],
          },
          {
            title: 'Устройство',
            umenu: [
              {
                title: "Дисплей",
                text: "",
                img: 'display',
                type: 1,
                params: { name: "null" }
              },
              {
                title: "Звук & Уведомления",
                text: "",
                img: 'sound',
                type: 1,
                params: { name: "null" }
              },
              {
                title: "Приложения",
                text: "",
                img: 'apps',
                type: 1,
                params: { name: "null" }
              },              
            ],
          },
        ]
      },
      topbar_color: false,
    }
  }

  componentDidMount() {
    EventManager.addHandler('phone3', value => {
      if (value.type === 'updateMenu') {
        try {
          this.setState({ menu: value.menu });
          UMenu.forceUpdate();
        }
        catch (e) {
          console.log(e);
        }
      }
      else if (value.type === 'updateTopBar') { this.setState({ top_bar: value.bar }) }
      else return;
    })
  }

  rotateAndroid() {
    this.setState({ rotate: !this.state.rotate }) //нужно придумать на какое действие перевернуть телефон
    //mp.trigger('client:phone:rotate', this.state.rotate); // eslint-disable-line
  }
  clickApps(event, i) {
    if (event.link === "/phone/android/umenu") {
      this.setState({ topbar_color: true })
      this.setState({ path: event.link })

      //mp.trigger('client:phone:apps', event.action); // eslint-disable-line
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
                <BottomBar clickBack={this.clickBack.bind(this)} clickHome={this.clickHome.bind(this)} rotateAndroid={this.rotateAndroid.bind(this)} />
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Android;
