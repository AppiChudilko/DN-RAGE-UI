import React from 'react';
import UMenu from './apps/UMenu';
import DefaultPage from './Android/DefaultPage';
import TopBar from './Android/TopBar';
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
        {},
        {},
        {},
        {},
        {},
        {},
        { link: "/phone/android/umenu", img: 'settings' },
        { img: 'phone' },

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
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            type: 1,
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            type: 2,
            value: true,
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            type: 2,
            value: false,
          },
        ]
      },
      topbar_color: false,
    }
  }
  rotateAndroid() {
    // this.setState({ rotate: !this.state.rotate }) //нужно придумать на какое действие перевернуть телефон
  }
  clickApps(event) {
    if (event === 6) {
      this.setState({ topbar_color: true })
    }
    console.log(event)
  }
  clickBack() {
    this.setState({ topbar_color: false })
  }
  render() {
    return (
      <React.Fragment >
        <div className={this.state.rotate ? "android-phone rotate-androind" : "android-phone"} onClick={() => this.rotateAndroid()}>
          <div className="phone-bg bg-one">
            <div className={this.state.rotate ? "rotate-components" : null}>
              <TopBar umenu={this.state.topbar_color} data={this.state.top_bar} />
              <Router>
                <Route exact path="/phone/android/defaultpage">
                  <DefaultPage data={this.state.apps} clickApps={this.clickApps.bind(this)} top_bar={this.state.top_bar} />
                </Route>
                <Route exact path="/phone/android/umenu">
                  <UMenu data={this.state.menu} clickBack={this.clickBack.bind(this)} />
                </Route>
                <Redirect to={this.state.path} push />
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Android;
