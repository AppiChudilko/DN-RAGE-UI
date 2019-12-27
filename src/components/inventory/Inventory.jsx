/* eslint-disable */ // Должно быть тут :)
import React from 'react';
import './css/inventory.css'
import { Animated } from 'react-animated-css'
import InteractionMenu from '../interactionmenu/InteractionMenu';
import EventManager from "../../EventManager";

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false, // Инвентарь открыт/закрыт
      craft: false,
      trunk_open: false, // Багажник открыт/закрыт
      crafting_succes: false,
      x: '',
      y: '',
      inter_show: false,
      inter_menu_selected: { item: {}, source: '' }, // Сюда автоматически записывается выбранный предмет для взаимодействия через меню

      inter_menu: [ // Пункты меню (генерируются динамично, в зависимости от выбранного предмета)
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
        { name: "Быстрый доступ", action: "to_hotbar", show: false },
        { name: "Снять", action: "take_off", show: false },
        { name: "Убрать в инвентарь", action: "unequip", show: false },
        { name: "Надеть", action: "put_on", show: false }
      ],

      items: [ // Инвентарь
        { id: 1, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" }, // айди предмета из базы
        { id: 2, item_id: 2, name: "Кола", volume: 15, desc: "", icon: "img-burger", params: "{}" }, // items.id Уникальный id предмета из базы (не должны повторяться)
        { id: 3, item_id: 3, name: "Кокс", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 4, item_id: 4, name: "Калькулятор", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 5, item_id: 5, name: "Мачете", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 6, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 7, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 8, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 9, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 10, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 11, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 12, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 13, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 42, item_id: 90, name: "P90", volume: 15, desc: "", icon: "img-weapon", params: "{}" },
        { id: 43, item_id: 102, name: "Очки", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
      ],

      vehicle_items: [ // Багажник
        { id: 14, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" }, // айди предмета из базы
        { id: 15, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" }, // vehicle_items.id Уникальный id предмета из базы (не должны повторяться)
        { id: 16, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 17, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 18, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 19, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 20, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 21, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 22, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 23, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 24, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 25, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
        { id: 26, item_id: 1, name: "Бургер", volume: 15, desc: "", icon: "img-burger", params: "{}" },
      ],
      hotbar: [ // Слоты быстрого доступа (не больше 15, пустые добавляются сами)
        { index: 1, item_id: 1, name: "Бургерcкурочкой", icon: "img-burger", params: "{}" },
      ],
      selected_item: {},

      // Надетые на персонажа предметы
      equipment_outfit: [ // equipment_outfit.id Уникальный id предмета из базы (не должны повторяться)
        { id: 28, item_id: 101, name: "Кепка", volume: 15, desc: "", icon: "img-outfit", params: "{}" }, // equipment_outfit.item_id айди предмета в игре
        { id: 29, item_id: 102, name: "Очки", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 30, item_id: 103, name: "Маска", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 31, item_id: 104, name: "Футболка", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 32, item_id: 105, name: "Бижютерия", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 33, item_id: 106, name: "Серьги", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 34, item_id: 107, name: "Штаны", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 35, item_id: 108, name: "Часы", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 36, item_id: 109, name: "Браслет", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 37, item_id: 110, name: "Обувь", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 38, item_id: 111, name: "Часы", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 39, item_id: 112, name: "Телефон", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 40, item_id: 113, name: "Деньги", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
        { id: 41, item_id: 114, name: "Карта", volume: 15, desc: "", icon: "img-outfit", params: "{}" },
      ],
      itemsById: { // В массивах должны быть айди всех предметов разного типа
        food: [1], // Можно "съесть"
        drinks: [2], // Можно "выпить"
        usable: [4], // Можно "использовать"
        consumable: [3], // Можно "употребить"
        equipable: [47, 90], // Можно "экипировать"
      },

      // !!! Ключи объекта outfitById нельзя менять местами !!!
      outfitById: { // В массивах должны быть айди всех outfit-предметов разного типа
        cap: [101], // Кепки
        glasses: [102], // Очки
        mask: [103], // Маски
        shirt: [104], // Футболки
        jewerly: [105], // Бижютерия (ожерелья?)
        earrings: [106], // Серьги
        jeans: [107], // Штаны
        watch: [108], // Часы
        bracelet: [109], // Браслеты
        boot: [110], // Обувь
        clock: [111], // Часы (второй раз?)
        phone: [112], // Телефоны
        money: [113], // Деньги?
        card: [114], // Карточки
      },

      // !!! Элементы массива outfit нельзя менять местами !!!
      outfit: [
        [
          { slot: "outf-cap", equipped: false, type: 'cap' },
          { slot: "outf-glasses", equipped: false, type: 'glasses' },
          { slot: "outf-mask", equipped: false, type: 'mask' },
          { slot: "outf-shirt", equipped: false, type: 'shirt' },
          { slot: "outf-jewerly", equipped: false, type: 'jewerly' },
          { slot: "outf-earrings", equipped: false, type: 'earrings' },
          { slot: "outf-jeans", equipped: false, type: 'jeans' },
          { slot: "outf-watch", equipped: false, type: 'watch' },
          { slot: "outf-bracelet", equipped: false, type: 'bracelet' },
          { slot: "outf-boot", equipped: false, type: 'boot' },
        ],
        [
          { slot: "outf-clock", equipped: false, type: 'clock' },
          { slot: "outf-phone", equipped: false, type: 'phone' },
          { slot: "outf-money", equipped: false, type: 'money' },
          { slot: "outf-card", equipped: false, type: 'card' },
        ],
      ],

      equipment_weapon: [ // Экипированное оружие
        { id: 27, item_id: 47, name: "AK47", volume: 15, desc: "", icon: "img-weapon", params: "{}" }, // equipment_weapon.item_id айди оружия
        { id: 28, item_id: 90, name: "P90", volume: 15, desc: "", icon: "img-weapon", params: "{}" }, // equipment_weapon.id Уникальный id предмета из базы (не должны повторяться)
      ]
    }
  }

  componentDidMount() {
    EventManager.addHandler('inventory', value => {
      if (value.type === 'show') { this.setState({ show: true }) }
      if (value.type === 'showOrHide') {
        let status = !this.state.show;
        mp.trigger('client:inventory:status', status); // eslint-disable-line
        this.setState({ show: status })
      }
      if (value.type === 'trunk') { this.setState({ trunk_open: true }) }
      else return;
    })

    this.checkHotbar() // Обновление слотов быстрого доступа
    this.checkOutfit() // Правильное отображение иконок одежды и прочего outfit'a
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.hotbar !== prevState.hotbar) { // Обновляет быстрый доступ при изменении this.state.hotbar
      this.checkHotbar()
    }
    if (this.state.equipment_outfit !== prevState.equipment_outfit) { // Обновляет отображение outfit'a при изменении this.state.equipment_outfit
      this.checkOutfit()
    }
  }
  checkHotbar() { // Обновляет хотбар, генерирует пустые ячейки
    if (this.state.hotbar.length < 15) {
      let hotbar = this.state.hotbar
      while (hotbar.length < 15) {
        hotbar.push({});
      }
      this.setState({ hotbar })
    }
  }
  checkOutfit() { // Это выглядит как "эпичный пиздец", но оно очень хорошо работает :D (обновляет состояние предметов outfit)
    let foundOutfit = [];
    for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
      for (let j = 0; j < Object.values(this.state.outfitById)[i].length; j++) {
        for (let k = 0; k < this.state.equipment_outfit.length; k++) {
          if (Object.values(this.state.outfitById)[i][j] === this.state.equipment_outfit[k].item_id) {
            foundOutfit.push(i);
            if (i < 10) {
              this.setState(prevState => ({ ...prevState.outfit[0][i].equipped = true }))
            } else {
              this.setState(prevState => ({ ...prevState.outfit[1][i - 10].equipped = true }))
            }
          }
        }
      }
    }
    for (let i = 0; i < 14; i++) {
      if (!foundOutfit.includes(i)) {
        if (i < 10) {
          this.setState(prevState => ({ ...prevState.outfit[0][i].equipped = false }))
        } else {
          this.setState(prevState => ({ ...prevState.outfit[1][i - 10].equipped = false }))
        }
      }
    }
  }
  changeBtnCraft() {
    this.setState({ craft: !this.state.craft })
  }
  handlePos(e, item, source) { // Функция которая генерирует меню взаимодействия
    if(source === 'outfit' && item.equipped === false) return; // Не открывать меню взаимодействия если ячейка outfit'a пустая
    this.setState(prevState => ({ ...prevState.inter_menu_selected.item = item, ...prevState.inter_menu_selected.source = source }))
    if (this.state.inter_show) {
      let menu = this.state.inter_menu
      for (let j = 0; j < menu.length; j++) {
        menu[j].show = false
      }
      this.setState({ inter_menu: menu, inter_show: false })
    }
    let menu = this.state.inter_menu
    let actions = ["give", "drop"] // Стандартные действия для всех предметов (передать, выбросить)
    if (this.state.itemsById.food.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('eat') // Съесть
    }
    if (this.state.itemsById.drinks.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('drink') // Выпить
    }
    if (this.state.itemsById.consumable.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('consume') // Употребить
    }
    if (this.state.itemsById.usable.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('use') // Использовать
    }
    if (this.state.itemsById.equipable.includes(item.item_id) && source !== 'weapon') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('equip') // Экипировать
    }
    for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
      if (Object.values(this.state.outfitById)[i].includes(item.item_id)) {
        if (source !== 'outfit') {
          actions.push('put_on') // Надеть
          break;
        } else {
          actions.push('take_off') // Надеть
          break;
        }
      }
    }
    if (this.state.trunk_open && source !== 'trunk') {
      actions.push('drop_in_truck') // Убрать в багажник
    }
    if (this.state.trunk_open && source === 'trunk') {
      actions.push('take') // Взять
    }
    if (source === 'hotbar') {
      actions.push('from_hotbar') // Убрать из быстрого доступа
    }
    if (source === 'inventory') {
      actions.push('to_hotbar') // Добавить в быстрый доступ
    }
    if (source === 'outfit') {
      actions.push('take_off') // Снять
    }
    if (source === 'weapon') {
      actions.push('unequip') // Снять экипировку / Убрать в инвентарь
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
    switch (button.action) {
      case "drop_in_truck": // Убрать в багажник
        this.moveToTrunk(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "take": // Взять
        this.moveToInventory(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "from_hotbar": // Удалить из быстрого доступа
        this.removeFromHotbar(this.state.inter_menu_selected.item)
        break;
      case "to_hotbar": // Добавить в быстрый доступ
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
      case "take_off": // Снять
        this.itemTakeOff(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "unequip": // Снять экипировку / Убрать в инвентарь
        this.itemUnequip(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "put_on": // Надеть
        this.itemPutOn(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
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
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          this.setState({ vehicle_items: this.state.vehicle_items.concat(item) })
          // mp.call ... переместить в багажник и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          this.setState({ vehicle_items: this.state.vehicle_items.concat(item) })
          // mp.call ... переместить в багажник и удалить из инвентаря
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, this.checkItem(item, 'outfit')) })
          this.setState({ vehicle_items: this.state.vehicle_items.concat(item) })
          // mp.call ... переместить в багажник, снять с персонажа, и удалить из инвентаря
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, this.checkItem(item, 'weapon')) })
          this.setState({ vehicle_items: this.state.vehicle_items.concat(item) })
          // mp.call ... переместить в багажник, снять оружие из экипировки, и удалить из инвентаря
        }
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
        // mp.call ... переместить в инвентарь и удалить из багажника
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
        // mp.call ... сохранить ячейки быстрого доступа
        break;
      default:
        break;
    }
  }
  removeFromHotbar(item) {
    this.setState({ hotbar: this.arrayRemove(this.state.hotbar, item) })
    // mp.call ... сохранить ячейки быстрого доступа
  }
  itemUse(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemConsume(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          // mp.call ... употребить и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... употребить и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... употребить и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemEat(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          // mp.call ... съесть и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... съесть и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... съесть и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemDrink(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          // mp.call ... выпить и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... выпить и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... выпить и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemEquip(item, source) {
    for (let i = 0; i < this.state.equipment_weapon.length; i++) {
      if (this.state.equipment_weapon[i].item_id === item.item_id) {
        return; // Нельзя экипировать одинаковое оружие несколько раз
      }
    }
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
          // mp.call ... экипировать и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
          // mp.call ... экипировать и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
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
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          // mp.call ... передать и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... передать и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... передать и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemDrop(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          // mp.call ... выбросить и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          // mp.call ... выбросить и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          // mp.call ... выбросить и удалить из багажника
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, this.checkItem(item, 'outfit')) })
          // mp.call ... выбросить и снять с персонажа
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, this.checkItem(item, 'weapon')) })
          this.setState({ vehicle_items: this.state.vehicle_items.concat(item) })
          // mp.call ... выбросить и удалить из экипировки
        }
        break;
      default:
        break;
    }
  }
  itemTakeOff(item, source) {
    switch (source) {
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, this.checkItem(item, 'outfit')) })
          this.setState({ items: this.state.items.concat(item) })
          // mp.call ... снять с персонажа и переместить в инвентарь
        }
        break;
      default:
        break;
    }
  }
  itemPutOn(item, source) {
    for(let i = 0; i<this.state.outfit[0].length; i++){
      if(this.state.outfit[0][i].type === this.getOutfitType(item) && this.state.outfit[0][i].equipped === true) return;
    }
    for(let i = 0; i<this.state.outfit[1].length; i++){
      if(this.state.outfit[1][i].type === this.getOutfitType(item) && this.state.outfit[0][i].equipped === true) return;
    }
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'hotbar')) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          // mp.call ... надеть на персонажа и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          this.setState({ items: this.arrayRemove(this.state.items, this.checkItem(item, 'inventory')) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          // mp.call ... надеть на персонажа и удалить из инвентаря
        }
        break;
      case 'trunk':
        if (this.checkItem(item, 'trunk') !== null) {
          this.setState({ vehicle_items: this.arrayRemove(this.state.vehicle_items, this.checkItem(item, 'trunk')) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          // mp.call ... надеть на персонажа и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemUnequip(item, source) {
    switch (source) {
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, this.checkItem(item, 'weapon')) })
          this.setState({ items: this.state.items.concat(item) })
          // mp.call ... снять оружие из экипировки и переместить в инвентарь
        }
        break;
      default:
        break;
    }
  }
  checkItem(item, source) { // Проверка и поиск предмета в том или ином source (инвентарь,багажник,экипировка и тд.)
    switch (source) {
      case 'inventory':
        let inventory = this.state.items;
        for (let i = 0; i < inventory.length; i++) {
          if (inventory[i].id === item.id) {
            return inventory[i];
          }
        }
        break;
      case 'hotbar':
        let inventory_hotbar = this.state.items;
        for (let i = 0; i < inventory_hotbar.length; i++) {
          if (inventory_hotbar[i].item_id === item.item_id) {
            return inventory_hotbar[i];
          }
        }
        break;
      case 'trunk':
        let trunk = this.state.vehicle_items;
        for (let i = 0; i < trunk.length; i++) {
          if (trunk[i].id === item.id) {
            return trunk[i];
          }
        }
        break;
      case 'weapon':
        let equipment = this.state.equipment_weapon;
        for (let i = 0; i < equipment.length; i++) {
          if (equipment[i].id === item.id) {
            return equipment[i];
          }
        }
        break;
      case 'outfit':
        let outfit = this.state.equipment_outfit;
        for (let i = 0; i < outfit.length; i++) {
          if (outfit[i].id === item.id) {
            return outfit[i];
          }
        }
        break;
      default:
        break;
    }
    console.log('Предмет не найден')
    return null;
  }
  getOutfitByType(type) {
    return this.state.equipment_outfit.filter(function (ele) {
      return this.state.outfitById[type].includes(ele.item_id);
    }.bind(this));
  }
  getOutfitType(item) {
    for(let i = 0; i<Object.entries(this.state.outfitById).length; i++){
      if(Object.entries(this.state.outfitById)[i][1].includes(item.item_id)){
        return Object.keys(this.state.outfitById)[i]
      }
    }
    return null;
  }
  arrayRemove(arr, value) { // Удаление предмета из массива
    return arr.filter(function (ele) {
      return ele !== value;
    });
  }
  closeTrunk() {
    this.setState({ trunk_open: false })
  }
  closeInventory(){
    this.setState({ show: false })
  }
  openTrunk(){
    this.setState({ trunk_open: true }) // <----- это нужно будет убрать и открывать эвентом с клиента
    // mp.call ... найти тачку и открыть багажник
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
                            <div className="obj-inf-weight"><span>{item.desc}</span></div>
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
                    {this.state.outfit[0].map((item, i) => {
                      const index = `item-outf${i}`
                      return (
                        <div key={index} className={`${item.slot}` + `${item.equipped ? ' use-outfit' : ''}`} onClick={(e) => this.handlePos(e, item, 'outfit')}></div>
                      )
                    })}
                    <div className="bottom-otf-box">
                      {this.state.outfit[1].map((item, i) => {
                        const index = `items-outf${i}`
                        return (
                          <div key={index} className={`${item.slot}` + `${item.equipped ? ' use-outfit' : ''}`} onClick={(e) => this.handlePos(e, item, 'outfit')}></div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="player-craft">
                  <div className="close-window-craft" onClick={() => this.closeInventory()}></div>
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
                        <div className={item.icon} />
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
                          <div className="obj-inf-weight"><span>{item.desc}</span></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                :
                <div className="trunk-boxes-main">
                  <div className="trunk-box" onClick={() => this.openTrunk()}></div>
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
