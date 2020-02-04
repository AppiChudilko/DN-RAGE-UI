import React from 'react';
import UMenu from './apps/UMenu';
import DefaultPage from './Android/DefaultPage';
import TopBar from './Android/TopBar';
import BottomBar from './Android/BottomBar';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EventManager from "../../../EventManager";
import PhoneBook from './Android/PhoneBook/PhoneBook';
import ProfileContact from './Android/PhoneBook/pages/ProfileContact';
import Scrollbar from './apps/Scrollbar';
import Modal from './apps/Modal';
import InputModal from './apps/InputModal';
import UTable from "./apps/UTable";

class Android extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '/phone/android/defaultpage',
      history: ['/phone/android/defaultpage'],
      rotate: false,
      top_bar: {
        time: '00:00',
        battery: 11, // max 11
        wifi: false,
        network: 4, // max 5
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
        { link: "/phone/android/phonebook", action: 'cont', img: 'cont' },
        { link: "/phone/android/umenu", action: 'sms', img: 'sms' },
      ],
      menu: {
        UUID: '11223',
        title: 'Ваши приложения',
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
            title: 'Таблица', //Массив работает внутри utable
            umenu: [
              {
                type: 10,
                title: 'TEst',
                readonly: true,
                columns: [
                  { title: 'Имя', field: 'name' },
                  { title: 'Фамилия', field: 'surname', initialEditValue: 'Введите значение'},
                  { title: 'Год рождения', field: 'birthYear' },
                  {
                    title: 'Место рождения',
                    field: 'birthCity',
                    lookup: { 34: 'Москва', 63: 'Санкт-Петербург' },
                  },
                  {
                    field: 'url',
                    title: 'Фото',
                    editable: false,
                    render: rowData => <img src={rowData.url} style={{width: 50, borderRadius: '50%'}}/>
                  },
                ],
                data: [
                  { params: {name: "none"}, url: 'https://a.rsg.sc//n/socialclub', name: 'Test', surname: 'Test1', birthYear: 1987, birthCity: 63 },
                  { params: {name: "none"}, url: 'https://a.rsg.sc//n/socialclub', name: 'Test', surname: 'Test2', birthYear: 2017, birthCity: 34 },
                ],
              }
            ]
          },
          {
            title: 'Новые типы блоков',
            umenu: [
              {
                title: "Vasya Pupkin",
                text: "Заместитель директора",
                img: 'https://a.rsg.sc//n/socialclub',
                online: false,
                type: 4,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Fleeca Bank",
                text: "5467 3526 2109 0919",
                name: 'Looney Moretti',
                color: '#4CAF50',
                type: 9,
                clickable: false,
                params: { name: "null" }
              },
              {
                title: "Kolya Livyn",
                text: "Заместитель кипера",
                img: 'https://a.rsg.sc//n/socialclub',
                online: true,
                type: 4,
                clickable: true,
                params: { name: "null" }
              },
              {
                show: false,
                title: "Повысить",
                text: "Заместитель кипера",
                scrollbarTitle: 'Test 123',
                scrollbar: [
                  { title: 'Ранг 1', checked: true, params: { name: "null" } },
                  { title: 'TEST', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                  { title: 'Ранг 3', params: { name: "null" } },
                ],
                type: 5,
                clickable: true,
                params: { name: "null" }
              },
              {
                show: false,
                title: "Тест",
                text: "Заместитель кипера",
                modalTitle: 'Повысить?',// Есть инпуты, где я пишу отдельно заголовок модалки и название самой кнопки
                modalText: 'Повысить?',
                modalButton: ['Нет', 'Да'],
                type: 7,
                clickable: true,
                params: { name: "null" }
              },
              {
                show: false,
                title: "Выдать розыск",
                text: "Заместитель кипера",
                modalTitle: 'Введите значение',
                modalValue: 'value',
                modalButton: ['Нет', 'Да'],
                type: 8,
                clickable: true,
                params: { name: "null" }
              },
            ]
          },
          {
            title: 'Приложения',
            umenu: [
              {
                title: "UVehicle",
                text: "Приложени \n перенос",
                img: 'car',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Life Invader",
                text: "Приложение вашей организации",
                img: 'community',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Life Invader",
                text: "Доступная и качественная реклама",
                img: 'invader',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Maze Bank",
                text: "",
                img: 'maze',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Fleeca Bank",
                text: "",
                img: 'fleeca',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Pacific Standard Bank",
                text: "",
                img: 'pacific',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
              {
                title: "Blaine County Savings Bank",
                text: "",
                img: 'blaine',
                type: 1,
                clickable: true,
                params: { name: "null" }
              },
            ],
          },
        ],
      },
      phonebook: {
        selected_contact: {
          name: 'Godvil Moretti',
          numbers: ['222-2346837'],
          mail: 'godvil.moretti@ded.net',
          img: 'https://a.rsg.sc//n/socialclub',
        },
        favorit: [
          {
            name: 'Godvil Moretti',
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Nika Moretti',
            img: 'https://a.rsg.sc//n/socialclub',
          },
        ],
        history: [

          {
            number: '222-2346837',
            img: 'https://a.rsg.sc//n/socialclub',
            type: 'call_missed', // call_made - исходящий звонок \ call_received - принятый звонок
            data: '20190212-1553'
          },
          {
            number: '999-9999999',
            img: 'https://a.rsg.sc//n/socialclub',
            type: 'call_missed', // call_made - исходящий звонок \ call_received - принятый звонок
            data: '20190212-1553'
          },
          {
            number: '222-3567347',
            img: 'https://a.rsg.sc//n/socialclub',
            type: 'call_received',
            data: '20190112-1453'
          },
          {
            number: '222-9746753',
            img: 'https://a.rsg.sc//n/socialclub',
            type: 'call_made',
            data: '20190212-1453'
          },
        ],
        contact: [
          {
            name: 'Wika Aretti',
            numbers: ['222-1234212', '555-6347544'],
            mail: 'wika.aretti@ded.net',
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Godvil Moretti',
            numbers: ['222-2346837'],
            mail: 'godvil.moretti@ded.net',
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Nika Moretti',
            numbers: ['222-9746753', '555-7653765'],
            mail: 'nika.moretti@ded.net',
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Aika Aretti',
            numbers: ['222-3567347', '555-5367433'],
            mail: 'aika.aretti@ded.net',
            img: 'https://a.rsg.sc//n/socialclub',
          },
        ],
      },
      topbar_color: false,
      // Все нижние массивы это временно для демонстрации работы
      scrollbar: {
        show: false,
        title: 'Выберите ранг',
        list: [
          { title: 'Ранг 1', checked: true, params: { name: "null" } },
          { title: 'Ранг 2', params: { name: "null" } },
          { title: 'Ранг 3', params: { name: "null" } },
        ],
      },
      modal: {
        show: false,
        title: 'Выберите ранг',
        text: 'Вы точно хотите всё это сделать? Обратной дороги нет, остановись',
        buttons: ['Нет', 'Да'],
      },
      inputmodal: {
        show: false,
        title: 'Выберите ранг',
        text: 'Вы точно хотите всё это сделать? Обратной дороги нет, остановись',
        value: '',
        buttons: ['Нет', 'Да'],
        params: { name: "null" },
      }
    }
  }

  componentDidMount() {
    EventManager.addHandler('phone3', value => {
      if (value.type === 'updateMenu') {
        try {
          this.setState({ menu: value.menu });
          //UMenu.forceUpdate();
          window.scrollTo(0, 0); //TODO Не работает((
        }
        catch (e) {
          console.log(e);
        }
      }
      else if (value.type === 'updateTopBar') { this.setState({ top_bar: value.bar }) }
      else return;
    })
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.path !== prevState.path) {
      if (this.state.path !== this.state.history[this.state.history.length - 1])
        this.historyPush()
    }
  }

  historyPush() {
    this.setState({ history: this.state.history.concat([this.state.path]) })
  }
  historyClear() {
    this.setState({ history: ['/phone/android/defaultpage'] })
  }
  historyGoBack() {
    if (this.state.history.length > 1)
      this.setState({
        path: this.state.history[this.state.history.length - 2],
      }, () => this.setState({ history: this.state.history.slice(0, -1) }))
  }

  rotateAndroid() {
    this.setState({ rotate: !this.state.rotate }) //нужно придумать на какое действие перевернуть телефон
    try {
      mp.trigger('client:phone:rotate', this.state.rotate); // eslint-disable-line
    }
    catch (e) {
      console.log(e);
    }
  }
  clickApps(event, i) {
    if (event.link === "/phone/android/umenu") {
      this.setState({ topbar_color: true })
      this.setState({ path: event.link })

      try {
        mp.trigger('client:phone:apps', event.action); // eslint-disable-line
      }
      catch (e) {
        console.log(e);
      }
    } else if (event.link === "/phone/android/phonebook") {
      this.setState({ topbar_color: true })
      this.setState({ path: event.link })

      try {
        mp.trigger('client:phone:apps', event.action); // eslint-disable-line
      }
      catch (e) {
        console.log(e);
      }
    }
    console.log(event)
  }
  getContactByNumber(number) {
    let data = null;
    this.state.phonebook.contact.map((contact) => {
      contact.numbers.forEach(function (el) {
        if (el === number) {
          data = contact;
        }
      })
    })
    return data;
  }
  getContactByName(name) {
    let contact = this.state.phonebook.contact.filter(obj => {
      return obj.name === name
    })
    if (contact.length > 0) return contact[0];
    return null;
  }
  clickBack() {
    //this.setState({ topbar_color: false });
    this.historyGoBack();
    //this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
  }
  clickHome() {
    this.setState({ topbar_color: false });
    this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
    this.historyClear();
  }
  clickContact(contact) {
    let data = null;
    if (contact.number !== undefined)
      data = this.getContactByNumber(contact.number)
    else
      data = this.getContactByName(contact.name)
    console.log(data)
    if (data !== null) {
      this.setState(prevState => ({ ...prevState.phonebook.selected_contact = data }))
    } else {
      this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
      this.setState(prevState => ({ ...prevState.phonebook.selected_contact.numbers = [contact.number] }))
    }
    this.setState({ path: '/phone/android/phonebook/profilecontact' }); //TODO Чет не работает
  }

  closeModal() {
    this.setState({ modal: { show: false } })
  }
  closeInputModal() {
    this.setState({ inputmodal: { show: false } })

    try {
      mp.trigger('client:phone:inputModal', false); // eslint-disable-line
    }
    catch (e) {
      console.log(e);
    }
  }
  openModal(title, text, buttons, params) {
    this.setState({
      modal: {
        show: true,
        title: title,
        text: text,
        buttons: buttons,
        params: params
      }
    });
  }
  openInputModal(title, buttons, value, params) {
    this.setState({
      inputmodal: {
        show: true,
        title: title,
        value: value,
        buttons: buttons,
        params: params
      }
    });

    try {
      mp.trigger('client:phone:inputModal', true); // eslint-disable-line
    }
    catch (e) {
      console.log(e);
    }
  }

  closeScrollbar() {
    this.setState({ scrollbar: { show: false } })
  }

  openScrollbar(title, items) {
    let data = {
      show: true,
      title: title,
      list: items,
    };
    this.setState({ scrollbar: data });
  }
  render() {
    return (
      <React.Fragment >
        <div className={this.state.rotate ? "android-phone rotate-androind" : "android-phone"}>
          <div className="phone-bg bg-1">
            <div className={this.state.rotate ? "rotate-components" : 'main-phone-box-flex'}>
              <TopBar umenu={this.state.topbar_color} data={this.state.top_bar} />
              <Router>
                <Route exact path="/phone/android/defaultpage">
                  <DefaultPage historyPush={this.historyPush.bind(this)} data={this.state.apps} clickApps={this.clickApps.bind(this)} top_bar={this.state.top_bar} />
                </Route>
                <Scrollbar data={this.state.scrollbar} closeScrollbar={this.closeScrollbar.bind(this)} />
                <Modal data={this.state.modal} closeModal={this.closeModal.bind(this)} />
                <InputModal data={this.state.inputmodal} closeInputModal={this.closeInputModal.bind(this)} />
                <Route exact path="/phone/android/umenu">
                  <UMenu historyPush={this.historyPush.bind(this)} data={this.state.menu} openModal={this.openModal.bind(this)} openInputModal={this.openInputModal.bind(this)} openScrollbar={this.openScrollbar.bind(this)} />
                </Route>
                <Route exact path="/phone/android/utable">
                  <UTable historyPush={this.historyPush.bind(this)} />
                </Route>
                <Route exact path="/phone/android/phonebook">
                  <PhoneBook historyPush={this.historyPush.bind(this)} data={this.state.phonebook} clickContact={this.clickContact.bind(this)} getContactByNumber={this.getContactByNumber.bind(this)} />
                </Route>
                <Route exact path="/phone/android/phonebook/profilecontact">
                  <ProfileContact historyPush={this.historyPush.bind(this)} data={this.state.phonebook} />
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
