import React from 'react';
import './css/inventory.css'
import { Animated } from 'react-animated-css'
import InteractionMenu from '../interactionmenu/InteractionMenu';

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      craft: false,
      trunk_open: true,
      crafting_succes: false,
      x: '',
      y: '',
      inter_show: false,
      inter_menu_selected: { item: {}, source: '' },
      inter_menu: [
        { name: "Использовать", action: "use", show: false },
        { name: "Употребить", action: "consume", show: false },
        { name: "Съесть", action: "eat", show: false },
        { name: "Выпить", action: "drink", show: false },
        { name: "Убрать в багажник", action: "drop_in_truck", show: false },
        { name: "Взять", action: "take", show: false },
        { name: "Экипировать", action: "equip", show: false },
        { name: "Передать", action: "give", show: true },
        { name: "Выкинуть", action: "drop", show: false },
        { name: "Убрать", action: "from_hotbar", show: false },
        { name: "Быстрый доступ", action: "to_hotbar", show: false }
      ],
      items: [ // Инвентарь
        { id: 1, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" }, // айди предмета из базы
        { id: 2, item_id: 2, name: "Кола", volume: 15, icon: "img-burger" }, // items.id Уникальный id предмета из базы (не должны повторяться)
        { id: 3, item_id: 3, name: "Кокс", volume: 15, icon: "img-burger" },
        { id: 4, item_id: 4, name: "Калькулятор", volume: 15, icon: "img-burger" },
        { id: 5, item_id: 5, name: "Мачете", volume: 15, icon: "img-burger" },
        { id: 6, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 7, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 8, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 9, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 10, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 11, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 12, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 13, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
      ],
      vehicle_items: [ // Багажник
        { id: 14, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" }, // айди предмета из базы
        { id: 15, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" }, // vehicle_items.id Уникальный id предмета из базы (не должны повторяться)
        { id: 16, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 17, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 18, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 19, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 20, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 21, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 22, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 23, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 24, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 25, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
        { id: 26, item_id: 1, name: "Бургер", volume: 15, icon: "img-burger" },
      ],
      hotbar: [ // Слоты быстрого доступа (не больше 15, пустые добавляются сами)
        { index: 1, item_id: 1, name: "Бургерcкурочкой", icon: "img-burger" }, // айди предмета из базы
      ],
      selected_item: {},
      equipment_outfit: [
        [
          { slot: "outf-cap", equipped: true, id: 28, item_id: 5, name: "Кепка", volume: 15, icon: "img-outfit" }, // equipment_outfit.id Уникальный id предмета из базы (не должны повторяться)
          { slot: "outf-glasses", equipped: false, id: 29, item_id: 5, name: "Очки", volume: 15, icon: "img-outfit" },
          { slot: "outf-mask", equipped: false, id: 30, item_id: 5, name: "Маска", volume: 15, icon: "img-outfit" },
          { slot: "outf-shirt", equipped: false, id: 31, item_id: 5, name: "Футболка", volume: 15, icon: "img-outfit" },
          { slot: "outf-jewerly", equipped: false, id: 32, item_id: 5, name: "Бижютерия", volume: 15, icon: "img-outfit" },
          { slot: "outf-earrings", equipped: true, id: 33, item_id: 5, name: "Серьги", volume: 15, icon: "img-outfit" },
          { slot: "outf-jeans", equipped: false, id: 34, item_id: 5, name: "Штаны", volume: 15, icon: "img-outfit" },
          { slot: "outf-watch", equipped: false, id: 35, item_id: 5, name: "Часы", volume: 15, icon: "img-outfit" },
          { slot: "outf-bracelet", equipped: true, id: 36, item_id: 5, name: "Браслет", volume: 15, icon: "img-outfit" },
          { slot: "outf-boot", equipped: false, id: 37, item_id: 5, name: "Обувь", volume: 15, icon: "img-outfit" },
        ],
        [
          { slot: "outf-clock", equipped: true, id: 38, item_id: 5, name: "Часы", volume: 15, icon: "img-outfit" }, // equipment_outfit.id Уникальный id предмета из базы (не должны повторяться)
          { slot: "outf-phone", equipped: false, id: 39, item_id: 5, name: "Телефон", volume: 15, icon: "img-outfit" },
          { slot: "outf-money", equipped: false, id: 40, item_id: 5, name: "Деньги", volume: 15, icon: "img-outfit" },
          { slot: "outf-card", equipped: true, id: 41, item_id: 5, name: "Карта", volume: 15, icon: "img-outfit" },
        ],
      ],
      equipment_weapon: [
        { id: 27, item_id: 47, name: "AK47", volume: 15, icon: "img-weapon" }, // айди оружия из базы
        { id: 28, item_id: 90, name: "P90", volume: 15, icon: "img-weapon" }, // equipment_weapon.id Уникальный id предмета из базы (не должны повторяться)
      ]
    }
  }
  componentDidMount() {
    this.checkHotbar()
  }
  componentDidUpdate(prevState, prevProp) {
    if (this.state.hotbar !== prevState.hotbar) {
      this.checkHotbar()
    }
  }
  checkHotbar() {
    if (this.state.hotbar.length < 15) {
      let hotbar = this.state.hotbar
      while (hotbar.length < 15) {
        hotbar.push({});
      }
      this.setState({ hotbar })
    }
  }
  changeBtnCraft() {
    this.setState({ craft: !this.state.craft })
  }
  handlePos(e, item, source) {
    this.setState(prevState => ({ ...prevState.inter_menu_selected.item = item, ...prevState.inter_menu_selected.source = source }))
    if (this.state.inter_show) {
      let menu = this.state.inter_menu
      for (let j = 0; j < menu.length; j++) {
        menu[j].show = false
      }
      this.setState({ inter_menu: menu, inter_show: false })
    }
    let menu = this.state.inter_menu
    let actions = ["give", "drop"]
    switch (item.item_id) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      case 1:
        actions.push('eat')
        break;
      case 2:
        actions.push('drink')
        break;
      case 3:
        actions.push('consume')
        break;
      case 4:
        actions.push('use')
        break;
      case 5:
        actions.push('equip')
        break;
      default:
        break;
    }
    console.log(source)
    if (this.state.trunk_open && source !== 'trunk') {
      actions.push('drop_in_truck')
    }
    if (this.state.trunk_open && source === 'trunk') {
      actions.push('take')
    }
    if (source === 'hotbar') {
      actions.push('from_hotbar')
    }
    if (source === 'inventory') {
      actions.push('to_hotbar')
    }
    for (let i = 0; i < actions.length; i++) {
      for (let j = 0; j < menu.length; j++) {
        if (actions[i] === menu[j].action) {
          menu[j].show = true
        }
      }
    }
    this.setState({ inter_menu: menu, inter_show: true })
    let window_width = window.screen.availWidth;
    let window_height = window.screen.availHeight;

    let x = ((e.clientX * 100) / window_width);
    let y = ((e.clientY * 100) / window_height);

    let height_element = 3700 / window_height;

    if (x > 90) {
      x = 89
    }
    if (y > 99 - height_element) {
      y = 99 - height_element
    }
    this.setState({ x: x, y: y });
  }
  closeInterMenu(e, button) {
    console.log(button)
    console.log(this.state.inter_menu_selected.item)
    console.log(this.state.inter_menu_selected.source)
    switch (button.action) {
      case "drop_in_truck":
        this.moveToTrunk(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "take":
        this.moveToInventory(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "from_hotbar":
        this.removeFromHotbar(this.state.inter_menu_selected.item)
        break;
      case "to_hotbar":
        this.moveToHotbar(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "use": // Использовать
        this.itemUse(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "consume": // Употребить
        this.itemConsume(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "eat": // Съесть
        this.itemEat(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "drink": // Выпить
        this.itemDrink(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "equip": // Экипировать
        this.itemEquip(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "give": // Передать
        this.itemGive(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "drop": // Выкинуть
        this.itemDrop(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      default:
        break;
    }
    if (this.state.inter_show) {
      let menu = this.state.inter_menu
      for (let j = 0; j < menu.length; j++) {
        menu[j].show = false
      }
      this.setState(prevState => ({ ...prevState.inter_menu_selected.item = {}, ...prevState.inter_menu_selected.source = '' }))
      this.setState({ inter_menu: menu, inter_show: false })
    }
  }
  moveToTrunk(item, source) {
    switch (source) {
      case "inventory":
        this.setState({ items: this.arrayRemove(this.state.items, item) })
        this.setState({ vehicle_items: this.state.vehicle_items.concat(item) })
        break;
      default:
        break;
    }
  }
  moveToInventory(item, source) {
    switch (source) {
      case "trunk":
        this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, item) })
        this.setState({ items: this.state.items.concat(item) })
        break;
      default:
        break;
    }
  }
  moveToHotbar(item, source) {
    let hotbar = this.state.hotbar.filter(function (ele) {
      return Object.entries(ele).length !== 0;
    });
    if (hotbar.length >= 15) {
      console.log("Все ячейки заняты!")
      return;
    }
    switch (source) {
      case "inventory":
        this.setState({ hotbar: hotbar.concat({ index: hotbar.length + 1, item_id: item.item_id, name: item.name, icon: item.icon }) })
        break;
      default:
        break;
    }
  }
  removeFromHotbar(item) {
    this.setState({ hotbar: this.arrayRemove(this.state.hotbar, item) })
  }
  itemUse(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить
        }
        break;
      default:
        break;
    }
  }
  itemConsume(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... употребить и удалить
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... употребить и удалить
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... употребить и удалить
        }
        break;
      default:
        break;
    }
  }
  itemEat(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... съесть и удалить
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... съесть и удалить
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... съесть и удалить
        }
        break;
      default:
        break;
    }
  }
  itemDrink(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... выпить и удалить
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... выпить и удалить
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... выпить и удалить
        }
        break;
      default:
        break;
    }
  }
  itemEquip(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... экипировать и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... экипировать и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... экипировать и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemGive(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... передать и удалить
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... передать и удалить
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... передать и удалить
        }
        break;
      default:
        break;
    }
  }
  itemDrop(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... выбросить и удалить
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          console.log(this.checkItem(item, 'inventory'))
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... выбросить и удалить
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... выбросить и удалить
        }
        break;
      default:
        break;
    }
  }
  checkItem(item, source) { // Проверка и поиск предмета в том или ином source
    switch (source) {
      case 'inventory':
        let inventory = this.state.items;
        for (let i = 0; i < inventory.length; i++) {
          if (inventory[i].item_id === item.item_id) {
            return inventory[i];
          }
        }
        break;
      case 'trunk':
        let trunk = this.state.vehicle_items;
        for (let i = 0; i < trunk.length; i++) {
          if (trunk[i].item_id === item.item_id) {
            return trunk[i];
          }
        }
        break;
      default:
        break;
    }
    console.log('Предмет не найден')
    return null;
  }
  arrayRemove(arr, value) { // Удаление предмета из массива
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
  closeTrunk(){
    this.setState({trunk_open: false})
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment>
        <InteractionMenu
          x={this.state.x}
          y={this.state.y}
          show={this.state.inter_show}
          inter_menu={this.state.inter_menu}
          closeInterMenu={this.closeInterMenu.bind(this)}
        />
        <div className="inv-box animated fadeIn">
          <div className="content-inventory">
            <div className="inventory-main">
              <div className="inv-row-main">
                <div className="player-inv">
                  <div className="liner-inv"></div>
                  <div className="title-inv"><span>Инвентарь</span></div>
                  <div className="object-inv-box">
                    {this.state.items.map((item, i) => {
                      const index = `item${i}`
                      return (
                        <div className="object-box" key={index} onClick={(e) => this.handlePos(e, item, 'inventory')}>
                          <div className={`img-inv-box ${item.icon}`}></div>
                          <div className="obj-inf-box">
                            <div className="obj-inf-title"><span>{item.name}</span></div>
                            <div className="obj-inf-weight"><span>Объем: {item.volume} см3</span></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="player-info">
                  <div className="title-inv"><span>Информация</span></div>
                  <div className="liner-inv-info"></div>
                  <div className="player-title-info">
                    <div className="player-inv-name"><span>Имя: Nika Kondr</span></div>
                    <div className="player-inv-old"><span>Возраст: 21</span></div>
                  </div>
                  <div className="outfit-player-box">
                    {this.state.equipment_outfit[0].map((item, i) => {
                      const index = `item-outf${i}`
                      return (
                        <div key={index} className={`${item.slot}` + `${item.equipped ? ' use-outfit' : ''}`} onClick={(e) => this.handlePos(e, item, 'outfit')}></div>
                      )
                    })}
                    <div className="bottom-otf-box">
                      {this.state.equipment_outfit[1].map((item, i) => {
                        const index = `items-outf${i}`
                        return (
                          <div key={index} className={`${item.slot}` + `${item.equipped ? ' use-outfit' : ''}`} onClick={(e) => this.handlePos(e, item, 'outfit')}></div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="player-craft">
                  <div className="close-window-craft"></div>
                  <div className="liner-inv"></div>
                  <div className="title-inv"><span>{this.state.craft ? 'Крафт' : 'Оружие'}</span></div>
                  <div className="menu-craft-change">
                    <input type="radio" name="btn-craft-class" id="btn-craft-class1" defaultChecked onChange={this.changeBtnCraft.bind(this)}></input>
                    <label htmlFor="btn-craft-class1" className="btn-craft" style={{ marginRight: 4 + 'px' }}>
                      <div className="bg-color-craft-block img-btn-weapon"></div>
                    </label>
                    <input type="radio" name="btn-craft-class" id="btn-craft-class2" onChange={this.changeBtnCraft.bind(this)}></input>
                    <label htmlFor="btn-craft-class2" className="btn-craft">
                      <div className="bg-color-craft-block img-btn-cutter"></div>
                    </label>
                  </div>
                  {this.state.craft ?
                    <React.Fragment>
                      <Animated animationIn="fadeIn" isVisible={true}>
                        <div className="cheked-crafting">
                          <div className={this.state.crafting_succes ? "img-succes" : "img-fail"}></div>
                        </div>
                        <div className="crafting-object-main">
                          <div className="liner-crafting-obj"></div>
                          <div className="main-box-craft-weapon">
                            <div className="square-box-craft-weapon sqr-wp-top"></div>
                            <div className="square-box-craft-weapon sqr-wp-top"></div>
                            <div className="square-box-craft-weapon sqr-wp-top"></div>
                            <div className="square-box-craft-weapon sqr-wp-top"></div>
                            <div className="square-box-craft-weapon sqr-wp-left sqr-wp-bottom"></div>
                            <div className="square-box-craft-weapon sqr-wp-bottom"></div>
                            <div className="square-box-craft-weapon sqr-wp-bottom"></div>
                            <div className="square-box-craft-weapon sqr-wp-bottom"></div>
                            <div className="square-box-craft-weapon sqr-wp-left"></div>
                            <div className="square-box-craft-weapon"></div>
                            <div className="square-box-craft-weapon"></div>
                            <div className="square-box-craft-weapon"></div>
                          </div>
                        </div>
                        <div className="craft-btn-obj">
                          <span>Создать</span>
                        </div>
                      </Animated>
                    </React.Fragment>
                    :
                    <React.Fragment>

                      <div className="weapon-player-equip ">
                        {this.state.equipment_weapon.map((item, i) => {
                          const index = `weaponplayer${i}`
                          return (
                            <div key={index} className="style-weapon-txt-craft" onClick={(e) => this.handlePos(e, item, 'weapon')}><span>Оружие: {item.name}</span></div>
                          )
                        })}
                      </div>
                      <div className="weapon-craft-box">
                        <div className="liner-weapon-crafting"></div>
                        <div className="box-img-equip-weapon">
                          <div className="weapon-m41"></div>
                        </div>
                        <div className="main-box-craft-weapon">
                          <div className="square-box-craft-weapon sqr-wp-top"></div>
                          <div className="square-box-craft-weapon sqr-wp-top"></div>
                          <div className="square-box-craft-weapon sqr-wp-top"></div>
                          <div className="square-box-craft-weapon sqr-wp-top"></div>
                          <div className="square-box-craft-weapon sqr-wp-left"></div>
                          <div className="square-box-craft-weapon"></div>
                          <div className="square-box-craft-weapon"></div>
                          <div className="square-box-craft-weapon"></div>
                        </div>
                      </div>

                    </React.Fragment>
                  }
                </div>
              </div>
              <div className="inv-clm-main">
                <div className="main-for-squar-box">
                  {this.state.hotbar.map((item, i) => {
                    const index = `hotbar${i}`
                    return (
                      <div className="squar-inv-box" key={index} data-title={item.name} onClick={(e) => this.handlePos(e, item, 'hotbar')}>
                        <div class={item.icon}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="invetory-trunk">
              {this.state.trunk_open ?
                <div className="trunk-info-menu">
                  <div className="close-window-craft color-blue-btn" onClick={() => this.closeTrunk()}></div>
                  {this.state.vehicle_items.map((item, i) => {
                    const index = `item${i}`
                    return (
                      <div className="object-box-trunk" key={index} onClick={(e) => this.handlePos(e, item, 'trunk')}>
                        <div className={`img-inv-box ${item.icon}`}></div>
                        <div className="obj-inf-box">
                          <div className="obj-inf-title"><span>{item.name}</span></div>
                          <div className="obj-inf-weight"><span>Объем: {item.volume} см3</span></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                :
                <div className="trunk-boxes-main">
                  <div className="trunk-box"></div>
                  <div className="trunk-box"></div>
                  <div className="trunk-box"></div>
                  <div className="trunk-box"></div>
                  <div className="trunk-box"></div>
                </div>
              }

            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}
export default Inventory;
