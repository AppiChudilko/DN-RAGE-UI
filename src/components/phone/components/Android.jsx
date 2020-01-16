import React from 'react';
import UMenu from './apps/UMenu';
import DefaultPage from './Android/DefaultPage';

class Android extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: false,
      menu: {
        UUID: '11223',
        title: 'Настройки',
        items: [
          {
            title: "Вызов",
            text: "Oписание",
            right: 1,
          },
          {
            title: "Включить громкость",
            text: "Oписание",
            right: 2,
          },
          {
            title: "Заблокировать",
            text: "Oписание",
            right: 3,
            type: 1,
            type:2,
          },
        ]
      }
    }
  }
  rotateAndroid() {
    this.setState({ rotate: !this.state.rotate })
  }
  render() {
    return (
      <React.Fragment >
        <div className={this.state.rotate ? "android-phone rotate-androind" : "android-phone"} onClick={() => this.rotateAndroid()}>
          <div className="phone-bg bg-one">
            <div className={this.state.rotate ? "rotate-components" : null}>
              {/* <DefaultPage /> */}
              <UMenu data={this.state.menu} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Android;
