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
import Messenger from './apps/Messenger';
import Chat from './apps/Chat';
import EditContact from './Android/PhoneBook/pages/EditContact';

class Android extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '/phone/android/defaultpage',
      history: ['/phone/android/defaultpage'],
      rotate: false,
      bg_color: '',
      top_bar: {
        time: '00:00',
        battery: 11, // max 11
        wifi: false,
        network: 4, // max 5
        temperature: '+21°C',
        date: '15 декабря',
        color_bar: ''
      },
      apps: [
        { link: "/phone/android/umenu", action: 'app', img: 'apps' },
        /*{ link: "/phone/android/umenu", action: 'maze', img: 'maze' },
        { link: "/phone/android/umenu", action: 'pacific', img: 'pacific' },
        { link: "/phone/android/umenu", action: 'invader', img: 'invader' },*/
        { link: "/phone/android/umenu", action: 'gps', img: 'gps' },
        //{ link: "/phone/android/umenu", action: 'settings', img: 'settings' },
        { link: "/phone/android/phonebook", action: 'cont', img: 'cont' },
        { link: "/phone/android/messenger", action: 'sms', img: 'sms' },
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
                  { title: 'Фамилия', field: 'surname', initialEditValue: 'Введите значение' },
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
                    render: rowData => <img src={rowData.url} alt="" style={{ width: 50, borderRadius: '50%' }} />
                  },
                ],
                data: [
                  { params: { name: "none" }, url: 'https://a.rsg.sc//n/socialclub', name: 'Выдал "Лицензия на оружие" гражданину Looney Moretti', surname: 'Выдал "Лицензия на оружие" гражданину Looney Moretti', birthYear: 1987, birthCity: 63 },
                  { params: { name: "none" }, url: 'https://a.rsg.sc//n/socialclub', name: 'Test', surname: 'Test2', birthYear: 2017, birthCity: 34 },
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
                title: " I found i still had this issues sometimes when I had certain divs set to height or min-height: 100%. I had to remove and either wrap it in a parent or move further into the tree where it could still scroll",
                text: " I found i still had this issues sometimes when I had certain divs set to height or min-height: 100%. I had to remove and either wrap it in a parent or move further into the tree where it could still scroll",
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
                title: "Blaine Country Savings Bank",
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
        editing_contact: false,
        selected_contact: {
          name: 'Godvil Moretti',
          numbers: ['222-2346837'],
          mail: 'godvil.moretti@ded.net',
          img: 'https://a.rsg.sc//n/socialclub',
        },
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
            isFavorite: false,
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Godvil Moretti',
            numbers: ['222-2346837'],
            mail: 'godvil.moretti@ded.net',
            isFavorite: true,
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Nika Moretti',
            numbers: ['222-9746753', '555-7653765'],
            mail: 'nika.moretti@ded.net',
            isFavorite: true,
            img: 'https://a.rsg.sc//n/socialclub',
          },
          {
            name: 'Aika Aretti',
            numbers: ['222-3567347', '555-5367433'],
            mail: 'aika.aretti@ded.net',
            isFavorite: false,
            img: 'https://a.rsg.sc//n/socialclub',
          },
          
        ],
      },
      messenger: {
        current_chat: '222-3567347'
      },
      chats: [{
        phone_number: '222-3567347',
        is_online: true, // был(а) в сети 12.01.2019
        last_login: '12.01.2019',
        message: [
          { type: 2, text: 'Все хорошо, а у тебя как?', time: '12:01' },
          { type: 1, text: 'Привет, как дела?', time: '12:00' },
          { type: 0, text: '1 января' },
        ]
      },
      {
        phone_number: '222-9746753',
        is_online: true, // был(а) в сети 12.01.2019
        last_login: '12.01.2019',
        message: [
          { type: 2, text: 'Все хорошо, а у тебя как?', time: '12:01' },
          { type: 1, text: 'Привет, как дела?', time: '12:00' },
          { type: 0, text: '1 января' },
        ]
      },
      {
        phone_number: '222-9746456',
        is_online: true, // был(а) в сети 12.01.2019
        last_login: '29.01.2019',
        message: [
          { type: 2, text: 'Товар на месте?', time: '12:01' },
        ]
      }],
      // topbar_color: false,
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
      if(this.state.path !== '/phone/android/phonebook/profilecontact/editcontact' && this.state.phonebook.editing_contact){
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
      }
    }
  }

  historyPush() {
    if (this.state.path === '/phone/android/defaultpage') {
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '' }))
      this.setState({ bg_color: '' })
    }
    if (this.state.path === '/phone/android/phonebook/profilecontact') {
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
      this.setState({ bg_color: '#000' })
    }
    if (this.state.path === '/phone/android/phonebook') {
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
      this.setState({ bg_color: '#1C3AA9' })
    }
    if (this.state.path === '/phone/android/messenger') {
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
      this.setState({ bg_color: '#000' })
    }
    if (this.state.path === '/phone/android/phonebook/profilecontact/editcontact') {
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
      this.setState({ bg_color: '#1C3AA9' })
    }
    this.setState({ history: this.state.history.concat([this.state.path]) })
  }
  historyClear() {
    this.setState({ history: ['/phone/android/defaultpage'] })
  }
  historyGoBack() {
    if (this.state.history.length > 1){
      if(this.state.history[this.state.history.length - 2] === '/phone/android/phonebook/profilecontact/editcontact'){
        this.setState({ history: this.state.history.slice(0, -1) })
      }
      this.setState({
        path: this.state.history[this.state.history.length - 2],
      }, () => this.setState({ history: this.state.history.slice(0, -1) }))
    }
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
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
      this.setState({ bg_color: '#000' })
      this.setState({ path: event.link })

      try {
        mp.trigger('client:phone:apps', event.action); // eslint-disable-line
      }
      catch (e) {
        console.log(e);
        //#1C3AA9
      }
    } else if (event.link === "/phone/android/phonebook") {
      this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
      this.setState({ bg_color: '#1C3AA9' })
      this.setState({ path: event.link })

      try {
        mp.trigger('client:phone:apps', event.action); // eslint-disable-line
      }
      catch (e) {
        console.log(e);
      }
    } else if (event.link === "/phone/android/messenger") {
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
  saveContact(contact, selected_contact){
    let index = this.state.phonebook.contact.findIndex(e => e === selected_contact);
    if(index !== -1){
      this.setState(prevState => ({
        ...prevState.phonebook.contact[index] = contact
      }))
    } else {
      this.addContact(contact)
    }
    this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
    this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
  }
  addContact(contact){
    contact.numbers = contact.numbers.filter(Boolean) // Удаляет пустые элементы массива
    if(contact.img === '' || contact.img === undefined) contact.img = 'https://a.rsg.sc//n/socialclub';
    this.setState(prevState => ({
      ...prevState.phonebook.contact = [...this.state.phonebook.contact].concat([contact])
    }))
    this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
    this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
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
  editContact(){
    this.setState(prevState => ({ ...prevState.phonebook.editing_contact = true }))
    this.setState({ path: '/phone/android/phonebook/profilecontact/editcontact' });
  }
  clickBack() {
    //this.setState({ topbar_color: false });
    this.historyGoBack();
    //this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
  }
  clickHome() {
    this.setState(prevState => ({ ...prevState.top_bar.color_bar = '' }))
    this.setState({ bg_color: '' })
    this.setState({ path: '/phone/android/defaultpage' }); //TODO Чет не работает
    this.historyClear();
  }
  clickContact(contact) {
    console.log(contact)
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

  closeModal(boolean) {
    this.setState({ modal: { show: false } })
    if (this.state.path === "/phone/android/phonebook/profilecontact") {
      if(boolean){
        this.historyGoBack();
        this.deleteContact(this.state.phonebook.selected_contact);
      }
    }
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
  // CHAT
  sendMessage(current_chat, chat) {
    let ind = -1;
    this.state.chats.forEach((e, i) => {
      if (e.phone_number === current_chat) {
        ind = i;
      }
    })
    console.log(chat)
    if (ind !== -1) {
      let chats = this.state.chats;
      chats[ind] = chat;
      this.setState({ chats: chats })
    } else {
      //console.log(chat)
      this.setState({ chats: [...this.state.chats, chat] })
    }
  }

  selectChat(phone_number) {
    this.setState(prevState => ({ ...prevState.messenger.current_chat = phone_number }), () => { this.setState({ path: "/phone/android/messenger/chat" }) })
  }
  favoriteContact(contact){
    let index = this.state.phonebook.contact.findIndex(e => e === contact);
    if(index !== -1){
      this.setState(prevState => ({...prevState.phonebook.contact[index].isFavorite = !this.state.phonebook.contact[index].isFavorite}))
      this.setState(prevState => ({...prevState.phonebook.selected_contact = this.state.phonebook.contact[index]}))
    }
  }
  deleteContact(contact){
    
    this.historyGoBack()
    let newContacts = [...this.state.phonebook.contact]
    let index = newContacts.findIndex(e => e === contact);
    if(index !== -1){
      newContacts.splice(index,1)
      console.log(newContacts)
      this.setState(prevState => ({
        ...prevState.phonebook.contact = newContacts
      }))
    }
  
  }

  setLink(link) {
    this.setState({ path: link })
  }
  render() {
    const bg = {
      background: this.state.bg_color
    }
    return (
      <React.Fragment >
        <div className={this.state.rotate ? "android-phone rotate-androind" : "android-phone"}>
          <div className="phone-bg bg-1" style={bg}>
            <div className={this.state.rotate ? "rotate-components" : 'main-phone-box-flex'}>
              <TopBar data={this.state.top_bar} />
              <Router>
                <Route exact path="/phone/android/defaultpage">
                  <DefaultPage historyPush={this.historyPush.bind(this)} data={this.state.apps} clickApps={this.clickApps.bind(this)} top_bar={this.state.top_bar} />
                </Route>
                <Scrollbar data={this.state.scrollbar} closeScrollbar={this.closeScrollbar.bind(this)} />
                <Modal data={this.state.modal} closeModal={this.closeModal.bind(this)} />
                <InputModal data={this.state.inputmodal} closeInputModal={this.closeInputModal.bind(this)} />
                <Route exact path="/phone/android/umenu">
                  <UMenu historyPush={this.historyPush.bind(this)} data={this.state.menu} openModal={this.openModal.bind(this)} openInputModal={this.openInputModal.bind(this)} openScrollbar={this.openScrollbar.bind(this)} rotate={this.state.rotate} />
                </Route>
                <Route exact path="/phone/android/utable">
                  <UTable historyPush={this.historyPush.bind(this)} />
                </Route>
                <Route exact path="/phone/android/phonebook">
                  <PhoneBook historyPush={this.historyPush.bind(this)} data={this.state.phonebook} clickContact={this.clickContact.bind(this)} getContactByNumber={this.getContactByNumber.bind(this)} setLink={this.setLink.bind(this)}/>
                </Route>
                <Route exact path="/phone/android/phonebook/profilecontact">
                  <ProfileContact historyPush={this.historyPush.bind(this)} data={this.state.phonebook} deleteContact={this.deleteContact.bind(this)} favoriteContact={this.favoriteContact.bind(this)} selectChat={this.selectChat.bind(this)} editContact={this.editContact.bind(this)} openModal={this.openModal.bind(this)} profile_contact_btn={this.state.profile_contact_btn}/>
                </Route>
                <Route exact path="/phone/android/phonebook/profilecontact/editcontact">
                 <EditContact historyGoBack={this.historyGoBack.bind(this)} setLink={this.setLink.bind(this)} addContact={this.addContact.bind(this)} saveContact={this.saveContact.bind(this)} selected_contact={this.state.phonebook.selected_contact} editing_contact={this.state.phonebook.editing_contact} clickContact={this.clickContact.bind(this)}/>
                </Route>
                <Route exact path="/phone/android/messenger">
                  <Messenger data={this.state.chats} getContactByNumber={this.getContactByNumber.bind(this)} selectChat={this.selectChat.bind(this)} />
                </Route>
                <Route exact path="/phone/android/messenger/chat">
                  <Chat data={this.state.chats} messenger={this.state.messenger} sendMessage={this.sendMessage.bind(this)} time={this.state.top_bar.time} getContactByNumber={this.getContactByNumber.bind(this)} setLink={this.setLink.bind(this)} />
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
