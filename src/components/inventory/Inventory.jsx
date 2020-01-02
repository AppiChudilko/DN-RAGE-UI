/* eslint-disable */ // Должно быть тут :)
import React from 'react';
import './css/inventory.css';
import './css/img-items.css';
import { Animated } from 'react-animated-css';
import InteractionMenu from '../interactionmenu/InteractionMenu';
import EventManager from "../../EventManager";

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false, // Инвентарь открыт/закрыт
      craft: false,
      secondary_inv_open: false, // Багажник открыт/закрыт
      crafting_succes: false,
      x: '',
      y: '',
      inter_show: false,
      inter_menu_selected: { item: {}, source: '' }, // Сюда автоматически записывается выбранный предмет для взаимодействия через меню

      inter_menu: [ // Пункты меню (генерируются динамично, в зависимости от выбранного предмета)
        { name: "Выбрать", action: "select", show: false },
        { name: "Использовать", action: "use", show: false },
        { name: "Употребить", action: "consume", show: false },
        { name: "Съесть", action: "eat", show: false },
        { name: "Выпить", action: "drink", show: false },
        { name: "Переложить", action: "move", show: false },
        { name: "Взять", action: "take", show: false },
        { name: "Экипировать", action: "equip", show: false },
        { name: "Передать", action: "give", show: true },
        { name: "Выбросить", action: "drop", show: false },
        { name: "Убрать", action: "from_hotbar", show: false },
        { name: "Быстрый доступ", action: "to_hotbar", show: false },
        { name: "Снять", action: "take_off", show: false },
        { name: "Убрать в инвентарь", action: "unequip", show: false },
        { name: "Надеть", action: "put_on", show: false },
        { name: "Закрыть", action: "close", show: false },
      ],

      items: [ // Инвентарь
        { id: 1, item_id: 1, name: "Бургер", volume: 15, desc: "123", params: "{}" }, // айди предмета из базы
      ],
      itemsCounted: [ // Сюда переписываются все предметы которые стакаются при обновлении инвентаря для правильного отображения
      ],

      secondary_items: [ // Багажник
        { id: 15, item_id: 1, name: "Бургер", volume: 15, desc: "", params: "{}" }, // secondary_items.id Уникальный id предмета из базы (не должны повторяться)
      ],
      secondary_itemsCounted: [ // Сюда переписываются все предметы которые стакаются при обновлении инвентаря для правильного отображения
      ],
      secondary_items_owner_id: 0,
      secondary_items_owner_type: 0,
      
      hotbar: [ // Слоты быстрого доступа (не больше 15, пустые добавляются сами)
      ],
      selected_item: {},

      // Надетые на персонажа предметы
      equipment_outfit: [ // equipment_outfit.id Уникальный id предмета из базы (не должны повторяться)
        /*{ id: 28, item_id: 269, name: "Головной убор", volume: 15, desc: "", params: "{}" }, // equipment_outfit.item_id айди предмета в игре
        { id: 29, item_id: 270, name: "Очки", volume: 15, desc: "", params: "{}" },
        { id: 30, item_id: 274, name: "Маска", volume: 15, desc: "", params: "{}" },
        { id: 31, item_id: 265, name: "Футболка", volume: 15, desc: "", params: "{}" },
        { id: 32, item_id: 268, name: "Аксессуар", volume: 15, desc: "", params: "{}" },
        { id: 33, item_id: 271, name: "Серьги", volume: 15, desc: "", params: "{}" },
        { id: 34, item_id: 266, name: "Штаны", volume: 15, desc: "", params: "{}" },
        { id: 35, item_id: 272, name: "Часы", volume: 15, desc: "", params: "{}" },
        { id: 36, item_id: 273, name: "Браслет", volume: 15, desc: "", params: "{}" },
        { id: 37, item_id: 267, name: "Обувь", volume: 15, desc: "", params: "{}" },
        { id: 38, item_id: 7, name: "Часы", volume: 15, desc: "", params: "{}" },
        { id: 39, item_id: 8, name: "Телефон", volume: 15, desc: "", params: "{}" },
        { id: 40, item_id: 48, name: "Деньги", volume: 15, desc: "", params: "{}" },
        { id: 41, item_id: 50, name: "Карта", volume: 15, desc: "", params: "{}" },*/
      ],
      itemsById: { // В массивах должны быть айди всех предметов разного типа
        food: [1], // Можно "съесть"
        drinks: [2], // Можно "выпить"
        usable: [4], // Можно "использовать"
        consumable: [3], // Можно "употребить"
        equipable: [47, 90, 5], // Можно "экипировать"
      },

      // !!! Ключи объекта outfitById нельзя менять местами !!!
      outfitById: { // В массивах должны быть айди всех outfit-предметов разного типа
        cap: [269], // Кепки
        glasses: [270], // Очки
        mask: [274], // Маски
        shirt: [265], // Футболки
        jewerly: [268], // Аксессуар (ожерелья?)
        earrings: [271], // Серьги
        jeans: [266], // Штаны
        watch: [272], // Часы
        bracelet: [273], // Браслеты
        boot: [267], // Обувь
        clock: [7], // Часы (второй раз?)
        phone: [8], // Телефоны
        money: [48], // Деньги?
        card: [50], // Карточки
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
        { id: 27, item_id: 47, name: "M4A1", volume: 15, desc: "", params: "{}" }, // equipment_weapon.item_id айди оружия
        { id: 28, item_id: 90, name: "P90", volume: 15, desc: "", params: "{}" }, // equipment_weapon.id Уникальный id предмета из базы (не должны повторяться)
      ],
      selected_weapon_id: 27,
      updateItemIcons_primary_timeout: false,
      updateItemIcons_secondary_timeout: false,
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
      if (value.type === 'updateEquip') {
        this.setState({ outfit: value.outfit })
      }
      if (value.type === 'updateItems') {
        this.setState({ items: value.items })
      }
      if (value.type === 'updateEquipItems') {
        this.setState({ equipment_outfit: value.items })
      }
      if (value.type === 'secondary_inv') { 
        this.setState({
          secondary_inv_open: true,
          secondary_items: value.items, // Массив с предметами вторичного инвентаря (багажник, склад и тд.)
          secondary_items_owner_id: value.owner_id, // ID владельца
          secondary_items_owner_type: value.owner_type, // Тип владельца
        }) }
      else return;
    })

    this.checkHotbar() // Обновление слотов быстрого доступа
    this.checkOutfit() // Правильное отображение иконок одежды и прочего outfit'a
    this.updateItemIcons('primary')
    this.updateItemIcons('secondary')
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.hotbar !== prevState.hotbar) { // Обновляет быстрый доступ при изменении this.state.hotbar
      this.checkHotbar()
    }
    if (this.state.equipment_outfit !== prevState.equipment_outfit) { // Обновляет отображение outfit'a при изменении this.state.equipment_outfit
      this.checkOutfit()
    }
    if (this.state.items !== prevState.items) { // Обновляет быстрый доступ при изменении this.state.hotbar
      this.updateItemIcons('primary')
    }
    if (this.state.secondary_items !== prevState.secondary_items) { // Обновляет быстрый доступ при изменении this.state.hotbar
      this.updateItemIcons('secondary')
    }
  }
  updateItemIcons(inventory){
    let items_copy = []
    if(inventory === 'primary'){
      if(this.state.updateItemIcons_primary_timeout) return
      this.setState({updateItemIcons_primary_timeout: true})
      items_copy = [...this.state.items]
    } else {
      if(this.state.updateItemIcons_secondary_timeout) return
      this.setState({updateItemIcons_secondary_timeout: true})
      items_copy = [...this.state.secondary_items]
    }
    items_copy.forEach((item, i) => {

      items_copy[i].icon = "icon-item img-" + item.item_id;

      /*if(this.state.itemsById.food.includes(item.item_id)) { items_copy[i].icon = "img-burger" }
      else if(this.state.itemsById.drinks.includes(item.item_id)) { items_copy[i].icon = "img-cola" }
      else if(this.state.itemsById.consumable.includes(item.item_id)) { items_copy[i].icon = "img-cocaine" }
      else if(this.state.outfitById.cap.includes(item.item_id)) { items_copy[i].icon = "img-cap" }
      else if(this.state.outfitById.glasses.includes(item.item_id)) { items_copy[i].icon = "img-glasses" }
      else if(this.state.outfitById.mask.includes(item.item_id)) { items_copy[i].icon = "img-mask" }
      else if(this.state.outfitById.shirt.includes(item.item_id)) { items_copy[i].icon = "img-shirt" }
      else if(this.state.outfitById.jewerly.includes(item.item_id)) { items_copy[i].icon = "img-jewerly" }
      else if(this.state.outfitById.earrings.includes(item.item_id)) { items_copy[i].icon = "img-earrings" }
      else if(this.state.outfitById.jeans.includes(item.item_id)) { items_copy[i].icon = "img-jeans" }
      else if(this.state.outfitById.watch.includes(item.item_id)) { items_copy[i].icon = "img-watch" }
      else if(this.state.outfitById.bracelet.includes(item.item_id)) { items_copy[i].icon = "img-bracelet" }
      else if(this.state.outfitById.boot.includes(item.item_id)) { items_copy[i].icon = "img-boot" }
      else if(this.state.outfitById.clock.includes(item.item_id)) { items_copy[i].icon = "img-clock" }
      else if(this.state.outfitById.phone.includes(item.item_id)) { items_copy[i].icon = "img-phone" }
      else if(this.state.outfitById.money.includes(item.item_id)) { items_copy[i].icon = "img-money" }
      else if(this.state.outfitById.card.includes(item.item_id)) { items_copy[i].icon = "img-card" }
      else if([47, 90].includes(item.item_id)) { items_copy[i].icon = "img-weapon" }
      else if([5].includes(item.item_id)) { items_copy[i].icon = "img-machete" }*/
    })
    inventory === 'primary' ?
    this.setState({items: items_copy}, () => { this.setState({updateItemIcons_primary_timeout: false}); this.updateStacks('primary') })
    :
    this.setState({secondary_items: items_copy}, () => { this.setState({updateItemIcons_secondary_timeout: false}); this.updateStacks('secondary') })
  }
  updateStacks(inventory){
    let items_copy = []
    if(inventory === 'primary'){
      items_copy = [...this.state.items]
    } else {
      items_copy = [...this.state.secondary_items]
    }
    let updatedItemsCounted = []
    items_copy.forEach((item) => {
      item = {...item}
      delete item.id
      
      let found = false
      updatedItemsCounted.forEach((itemCounted, i) => {
        if(item.item_id === itemCounted.item_id && item.name === itemCounted.name && item.desc === itemCounted.desc && item.params === itemCounted.params){
          updatedItemsCounted[i].count++;
          found = true;
        }
      })
      if(!found){
        item.count = 1
        updatedItemsCounted.push(item)
      }
    })
    inventory === 'primary' ?
    this.setState({itemsCounted: updatedItemsCounted})
    :
    this.setState({secondary_itemsCounted: updatedItemsCounted})
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
    if (source === 'outfit' && item.equipped === false) return; // Не открывать меню взаимодействия если ячейка outfit'a пустая
    this.setState(prevState => ({ ...prevState.inter_menu_selected.item = item, ...prevState.inter_menu_selected.source = source }))
    if (this.state.inter_show) {
      let menu = this.state.inter_menu
      for (let j = 0; j < menu.length; j++) {
        menu[j].show = false
      }
      this.setState({ inter_menu: menu, inter_show: false })
    }
    let menu = this.state.inter_menu
    let actions = ["give", "drop", "close"] // Стандартные действия для всех предметов (передать, выбросить, закрыть)
    if (source === 'weapon') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('select') // Выбрать оружие
    }
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
    if (this.state.secondary_inv_open && source !== 'secondary_inv') {
      actions.push('move') // Убрать в багажник
    }
    if (this.state.secondary_inv_open && source === 'secondary_inv') {
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

    let height_element = 30;

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
      case "close":
        break;
      case "select": // Взять в руки
        this.selectWeapon(this.state.inter_menu_selected.item)
        break;
      case "move": // Убрать в багажник
        this.moveItem(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
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
      case "give": // Передать
        this.itemGive(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "drop": // Выкинуть
        this.itemDrop(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "take_off": // Снять
        this.itemTakeOff(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "equip": // Экипировать
        this.itemEquip(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
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
  moveItem(item, source) {
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          // mp.call ... переместить в багажник и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          // mp.call ... переместить в багажник и удалить из инвентаря
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          // mp.call ... переместить в багажник, снять с персонажа, и удалить из инвентаря
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          if(item.id === this.state.selected_weapon_id) this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
          // mp.call ... переместить в багажник, снять оружие из экипировки, и удалить из инвентаря
        }
        break;
      default:
        break;
    }
  }
  moveToInventory(item, source) {
    switch (source) {
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          this.setState({ items: this.state.items.concat(item) })
          // mp.call ... переместить в инвентарь и удалить из багажника
        }
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
        this.setState({ hotbar: hotbar.concat({ index: hotbar.length + 1, item_id: item.item_id, name: item.name, desc: item.desc, icon: item.icon, params: item.params }) })
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
          // mp.call ... использовать предмет и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) }) // Возможно не каждый предмет нужно удалять, тогда нужна проверка по item_id
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... употребить и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... употребить и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... съесть и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... съесть и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... выпить и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... выпить и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
          // mp.call ... экипировать и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
          // mp.call ... экипировать и удалить из инвентаря
          mp.trigger('client:inventory:equip', item.id); // eslint-disable-line
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... передать и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... передать и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          // mp.call ... передать и удалить из багажника
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          // mp.call ... передать и удалить с персонажа
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) })
          if (item.id === this.state.selected_weapon_id) this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
          // mp.call ... передать оружие и удалить из экипировки
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
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... выбросить и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... выбросить и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          // mp.call ... выбросить и удалить из багажника
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          // mp.call ... выбросить и снять с персонажа
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) })
          if(item.id === this.state.selected_weapon_id) this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
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
          item = this.checkItem(item, 'outfit')
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          this.setState({ items: this.state.items.concat(item) })
          mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
          // mp.call ... снять с персонажа и переместить в инвентарь
        }
        break;
      default:
        break;
    }
  }
  itemPutOn(item, source) {
    for (let i = 0; i < this.state.outfit[0].length; i++) {
      if (this.state.outfit[0][i].type === this.getOutfitType(item) && this.state.outfit[0][i].equipped === true) return;
    }
    for (let i = 0; i < this.state.outfit[1].length; i++) {
      if (this.state.outfit[1][i].type === this.getOutfitType(item) && this.state.outfit[0][i].equipped === true) return;
    }
    switch (source) {
      case 'hotbar':
        if (this.checkItem(item, 'hotbar') !== null) {
          item = this.checkItem(item, 'hotbar')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          // mp.call ... надеть на персонажа и удалить из инвентаря
        }
        break;
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          mp.trigger('client:inventory:equip', item.id, item.item_id, item.count, item.params); // eslint-disable-line
          // mp.call ... надеть на персонажа и удалить из инвентаря
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
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
          item = this.checkItem(item, 'weapon')
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) })
          this.setState({ items: this.state.items.concat(item) })
          if(item.id === this.state.selected_weapon_id) this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
          // mp.call ... снять оружие из экипировки и переместить в инвентарь
          mp.trigger('client:inventory:unEquip', item.id); // eslint-disable-line
        }
        break;
      default:
        break;
    }
  }
  selectWeapon(item) {
    if (this.checkItem(item, 'weapon') !== null) {
      item = this.checkItem(item, 'weapon')
      this.setState({ selected_weapon_id: item.id })
      // mp.call ... выбрать оружие для модификации и взять в руки
    }
  }
  checkItem(item, source) { // Проверка и поиск предмета в том или ином source (инвентарь,багажник,экипировка и тд.)
    switch (source) {
      case 'inventory':
        let inventory = this.state.items;
        for (let i = 0; i < inventory.length; i++) {
          if (inventory[i].item_id === item.item_id && inventory[i].name === item.name && 
            inventory[i].desc === item.desc && inventory[i].params === item.params) {
            return inventory[i];
          }
        }
        break;
      case 'hotbar':
        let inventory_hotbar = this.state.items;
        for (let i = 0; i < inventory_hotbar.length; i++) {
          if (inventory_hotbar[i].item_id === item.item_id && inventory_hotbar[i].name === item.name && 
            inventory_hotbar[i].desc === item.desc && inventory_hotbar[i].params === item.params) {
            return inventory_hotbar[i];
          }
        }
        break;
      case 'secondary_inv':
        let secondary_items = this.state.secondary_items;
        for (let i = 0; i < secondary_items.length; i++) {
          if (secondary_items[i].item_id === item.item_id && secondary_items[i].name === item.name && 
            secondary_items[i].desc === item.desc && secondary_items[i].params === item.params) {
            return secondary_items[i];
          }
        }
        break;
      case 'weapon':
        let equipment = this.state.equipment_weapon;
        for (let i = 0; i < equipment.length; i++) {
          if (equipment[i].item_id === item.item_id && equipment[i].name === item.name && 
            equipment[i].desc === item.desc && equipment[i].params === item.params) {
            return equipment[i];
          }
        }
        break;
      case 'outfit':
        let outfit = this.state.equipment_outfit;
        for (let i = 0; i < outfit.length; i++) {
          if (outfit[i].item_id === item.item_id && outfit[i].name === item.name && 
            outfit[i].desc === item.desc && outfit[i].params === item.params) {
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
    for (let i = 0; i < Object.entries(this.state.outfitById).length; i++) {
      if (Object.entries(this.state.outfitById)[i][1].includes(item.item_id)) {
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
  closeSecondaryInventory() {
    this.setState({ secondary_inv_open: false })
  }
  closeInventory() {
    mp.trigger('client:inventory:status', false); // eslint-disable-line
    this.setState({ show: false })
  }
  openTrunk() {
    this.setState({ secondary_inv_open: true }) // <----- это нужно будет убрать и открывать эвентом с клиента
    // mp.call ... найти тачку и открыть багажник
  }
  openStock() {
    this.setState({ secondary_inv_open: true }) // <----- это нужно будет убрать и открывать эвентом с клиента
    // mp.call ... найти и открыть склад
  }
  openFridger() {
    this.setState({ secondary_inv_open: true }) // <----- это нужно будет убрать и открывать эвентом с клиента
    // mp.call ... найти и открыть холодильник
  }
  openWorld() {
    this.setState({ secondary_inv_open: true }) // <----- это нужно будет убрать и открывать эвентом с клиента
    // mp.call ... загрузить предметы рядом с игроком
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment>
        <div id="box">
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
                      {this.state.itemsCounted.map((item, i) => {
                        const index = `item${i}`
                        return (
                          <div className="object-box" key={index} onClick={(e) => this.handlePos(e, item, 'inventory')}>
                            <div className={`img-inv-box ${item.icon}`}></div>
                            <div className="obj-inf-box">
                              <div className="obj-inf-title"><span>{item.name}</span></div>
                              <div className="obj-inf-weight"><span>{item.desc}</span></div>
                            </div>
                            {item.count > 1 ? <div className="obj-inf-count">{item.count}</div>: null}
                        
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
                      <div className="player-inv-old"><span>ID Аккаунта: 456</span></div>
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
                              <div key={index} className={`style-weapon-txt-craft ${item.id === this.state.selected_weapon_id ? 'style-weapon-txt-craft-selected' : ''}`} onClick={(e) => this.handlePos(e, item, 'weapon')}><span>Оружие: {item.name}</span></div>
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
                {this.state.secondary_inv_open ?
                  <div className="trunk-info-menu">
                    <div className="close-window-craft color-blue-btn" onClick={() => this.closeSecondaryInventory()}></div>
                    {this.state.secondary_itemsCounted.map((item, i) => {
                      const index = `item${i}`
                      return (
                        <div className="object-box-trunk" key={index} onClick={(e) => this.handlePos(e, item, 'secondary_inv')}>
                          <div className={`img-inv-box ${item.icon}`}></div>
                          <div className="obj-inf-box">
                            <div className="obj-inf-title"><span>{item.name}</span></div>
                            <div className="obj-inf-weight"><span>{item.desc}</span></div>
                          </div>
                          {item.count > 1 ? <div className="obj-inf-count">{item.count}</div>: null}
                        </div>
                      )
                    })}
                  </div>
                  :
                  <div className="trunk-boxes-main">
                    <div className="trunk-box" onClick={() => this.openTrunk()}>Багажник</div>
                    <div className="trunk-box" onClick={() => this.openStock()}>Склад</div>
                    <div className="trunk-box" onClick={() => this.openFridger()}>Холодильник</div>
                    <div className="trunk-box" onClick={() => this.openWorld()}>Мир</div>
                    <div className="trunk-box">Что-то еще</div>
                  </div>
                }

              </div>
            </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
export default Inventory;



/*
let ItemList = [
    ["Верёвка", "", false, -1145063624, 1000, 4000], //0
    ["Мешок", "", false, -1194335261, 100, 2400], //1
    ["Кокаин", "", false, 1808635348, 1, 1], //2
    ["Лечебная марихуана", "", false, 671777952, 1, 5], //3
    ["Отмычка", "", false, -1803909274, 50, 6], //4
    ["Масло", "", false, -1532806025, 3000, 10000], //5
    ["Набор инструментов", "", false, 648185618, 4500, 12800], //6
    ["Электронные часы \"AppiWatch\"", "", true, 1169295068, 190, 110], //7
    ["Телефон", "", true, -1038739674, 120, 156], //8
    ["Канистра", "PetrolCan", false, 1069395324, 10000, 11300], //9
    ["Жвачка", "", false, 936464539, 20, 20], //10
    ["Баттончик \"Pluto\"", "", false, 936464539, 60, 30], //11
    ["Чипсы \"AppiPot\"", "", false, 936464539, 100, 1500], //12
    ["Упаковка Роллов", "", false, 936464539, 290, 2000], //13
    ["Гамбургер", "", false, 936464539, 190, 500], //14
    ["Салат Цезарь", "", false, 936464539, 200, 2000], //15
    ["Пицца", "", false, 936464539, 550, 7000], //16
    ["Жаркое", "", false, 936464539, 450, 2000], //17
    ["Кесадилья", "", false, 936464539, 2000, 2000], //18
    ["Фрикасе из кролика", "", false, 936464539, 575, 2000], //19
    ["Фрукты", "", false, 936464539, 180, 1000], //20
    ["Вода", "", false, 746336278, 330, 3500], //21
    ["Кофе", "", false, 746336278, 400, 4000], //22
    ["Чай", "", false, 746336278, 330, 3500], //23
    ["Лимонад", "", false, 746336278, 330, 3500], //24
    ["Кока-Кола", "", false, 746336278, 250, 2500], //25
    ["Энергетик", "", false, 746336278, 250, 2500], //26

    ["Коробка патронов 9mm (Пистолет)", "", true, 190687980, 1140, 432], //27 / 140
    ["Коробка патронов 18.5mm", "", true, 1560006187, 2420, 1024], //28 / 120
    ["Коробка патронов 7.62mm", "", true, 669213687, 2580, 686], //29 / 130
    ["Коробка патронов 5.56mm", "", true, 1843823183, 3620, 1568], //30 / 260

    ["Адреналин", "", false, -1282296755, 50, 6], // 31
    ["Сухпаек", "", false, 9168982, 2000, 5800], // 32
    ["Уголь", "", false, -756465278, 40, 6], // 33
    ["Сироп", "", false, -756465278, 75, 3], // 34
    ["Cосудосуживающий таблетка", "", false, -756465278, 30, 6], // 35
    ["Таблетка от кашля", "", false, -756465278, 40, 6], // 36
    ["Витаминки", "", false, -756465278, 55, 6], // 37
    ["Жаропонижающий", "", false, -756465278, 35, 6], // 38
    ["Антибиотик", "", false, -756465278, 35, 6], // 39
    ["Наручники", "", false, -1281059971, 340, 120], // 40
    ["Ключ от тс", "", false, 977923025, 6, 3], // 41
    ["Ключ от офиса", "", true, -331172978, 6, 3], // 42
    ["Ключ от дома", "", true, -331172978, 6, 3],  // 43
    ["Ключ от квартиры", "", true, -331172978, 6, 3], // 44
    ["Маска", "", true, 9168982, 650, 2800], // 45
    ["Одежда", "", false, 9168982, 650, 3800], //46
    ["Рация", "", false, -1964402432, 250, 170], // 47
    ["Кошелёк", "", false, -34897201, 120, 150], // 48
    ["Письма", "", false, 406712611, 80, 410], // 49
    ["Банковская карта", "", true, -1282513796, 15, 8], // 50
    ["Паспорт", "", false, -1750183478, 40, 16], // 51
    ["Лицензия", "", false, -925658112, 30, 116], // 52
    ["Удостоверение", "", false, -1595369626, 15, 8], // 53

    ["Кавалерийский кинжал", "Dagger", true, 1725061196, 400, 450,], // 54
    ["Бейсбольная бита", "Bat", true, 1742452667, 1500, 2000], // 55
    ["Боевой топор", "BattleAxe", true, 2133533553, 2200, 2400], // 56
    ["Розочка", "Bottle", true, -789123952, 110, 540], // 57
    ["Лом", "Crowbar", true, 1862268168, 3200, 1050], // 58
    ["Фонарик", "Flashlight", true, 211760048, 340, 400], // 59
    ["Клюшка для гольфа", "GolfClub", true, -580196246, 2900, 1150], // 60
    ["Молоток", "Hammer", true, 64104227, 860, 430], // 61
    ["Топорик", "Hatchet", true, 1653948529, 930, 860], // 62
    ["Нож", "Knife", true, -1982443329, 560, 520], // 63
    ["Кастет", "KnuckleDuster", true, -1803909274, 450, 80], // 64
    ["Мачете", "Machete", true, -2055486531, 1120, 525], // 65
    ["Полицейская дубинка", "Nightstick", true, -1634978236, 880, 970], // 66
    ["Разводной ключ", "Wrench", true, 10555072, 1760, 1490], // 67
    ["Бильярдный кий", "PoolCue", true, -1982443329, 470, 160], // 68
    ["Выкидной нож", "SwitchBlade", true, 1653948529, 130, 60], // 69

    ["Сolt SCAMP", "APPistol", true, 905830540, 1500, 950], // 70
    ["P99", "CombatPistol", true, 403140669, 800, 660], // 71
    ["Сигнальный пистолет", "FlareGun", true, 1349014803, 440, 270], // 72
    ["Enterprise Wide Body 1911", "HeavyPistol", true, 1927398017, 1120, 850], // 73
    ["Raging Bull", "Revolver", true, 1430410579, 1440, 1080], // 74
    ["Raging Bull Mk II", "Revolver_Mk2", true, 1430410579, 1990, 1080], // 75
    ["Contender G2", "MarksmanPistol", true, 1430410579, 1360, 1800], // 76
    ["Taurus PT92", "Pistol", true, 1467525553, 950, 1230], // 77
    ["Beretta 90Two", "PistolMk2", true, 1430410579, 920, 1050], // 78
    ["Desert Eagle", "Pistol50", true, -178484015, 1700, 1720], // 79
    ["HK P7M10", "SNSPistol", true, 339962010, 785, 660], // 80
    ["Colt Junior", "SNSPistol_Mk2", true, 1430410579, 365, 310], // 81
    ["Шокер", "StunGun", true, 1609356763, 760, 680], // 82
    ["FN Model 1922", "VintagePistol", true, -1124046276, 700, 720], // 83
    ["Colt New Service", "DoubleAction", true, 1430410579, 1450, 1170], // 84

    ["UTS-15", "AssaultShotgun", true, 1255410010, 2800, 11500], // 85
    ["KSG 12", "BullpupShotgun", true, -1598212834, 3100, 9500], // 86
    ["Обрез", "DoubleBarrelShotgun", true, -1920611843, 1410, 1800], // 87
    ["Сайга-12К", "HeavyShotgun", true, -1209868881, 3500, 10900], // 88
    ["Land Pattern Musket", "Musket", true, 1652015642, 4300, 14400], // 89
    ["Benelli M3", "PumpShotgun", true, 689760839, 4500, 16100], // 90
    ["Benelli M4", "PumpShotgun_Mk2", true, 798951501, 3500, 17600], // 91
    ["Mossberg 500", "SawnOffShotgun", true, -675841386, 2100, 3800], // 92
    ["Protecta", "SweeperShotgun", true, -1920611843, 2900, 6800], // 93

    ["P-90", "AssaultSMG", true, -473574177, 2800, 8800], // 94
    ["Mk 48", "CombatMG", true, -739394447, 8000, 16000], // 95
    ["HK MG4", "CombatMG_Mk2", true, 798951501, 8150, 17600], // 96
    ["SIG MPX-SD", "CombatPDW", true, -1393014804, 2700, 5000], // 97
    ["Thompson M1918A1", "Gusenberg", true, 574348740, 8400, 18400], // 98
    ["Intratec TEC-9", "MachinePistol", true, 1430410579, 1500, 1660], // 99
    ["ПКП «Печенег»", "MG", true,-2056364402, 8200, 17250], // 100
    ["Mini Uzi", "MicroSMG", true, -1056713654, 2650, 2500], // 101
    ["Scorpion vz.61", "MiniSMG", true, 1430410579, 2000, 1900], // 102
    ["MP5A3", "SMG", true, -500057996, 3200, 7800], // 103
    ["MP5K", "SMG_Mk2", true, -1920611843, 3350, 8100], // 104

    ["Tavor CTar-21", "AdvancedRifle", true, -1707584974, 3270, 12400], // 105
    ["AK-102", "AssaultRifle", true, 273925117, 3200, 14700], // 106
    ["AK-103", "AssaultRifle_Mk2", true, 798951501, 3600, 16200], // 107
    ["QBZ-97", "BullpupRifle", true, -1288559573, 3250, 13500], // 108
    ["QBZ-95", "BullpupRifle_Mk2", true, 798951501, 3350, 13900], // 109
    ["HK-416", "CarbineRifle", true, 1026431720, 3490, 14200], // 110
    ["HK-416A5", "CarbineRifle_Mk2", true, 798951501, 3560, 14900], // 111
    ["AKS-47u", "CompactRifle", true, -1920611843, 2400, 5700], // 112
    ["G36C", "SpecialCarbine", true, -1745643757, 2980, 12000], // 113
    ["G36KV", "SpecialCarbine_Mk2", true, 798951501, 3370, 13900], // 114

    ["M107", "HeavySniper", true, -746966080, 13500, 21000], // 115
    ["XM109", "HeavySniper_Mk2", true, 798951501, 14000, 24500], // 116
    ["M14 EBR", "MarksmanRifle", true, -1711248638, 5100, 17800], // 117
    ["SOCOM 16", "MarksmanRifle_Mk2", true, 798951501, 5900, 18200], // 118
    ["L115A3", "SniperRifle", true, 346403307, 6600, 14400], // 119

    ["M79", "CompactGrenadeLauncher", true, -1920611843, 50, 2050], // 120
    ["Пиротехническая установка", "Firework", true, 491091384, 8500, 29000], // 121
    ["M32 MGL", "GrenadeLauncher", true, -606683246, 5300, 19500], // 122
    ["FIM 92 Stinger", "HomingLauncher", true, 1901887007, 13500, 29000], // 123
    ["M134", "Minigun", true, 422658457, 30000, 50000], // 124
    ["Рельсовое оружие", "Railgun", true, -1876506235, 14900, 22500], // 125
    ["РПГ-7", "RPG", true, -218858073, 6000, 46000], // 126

    ["Мяч", "Ball", true, -383950123, 250, 310], // 127
    ["Дымовая гранта", "SmokeGrenade", true, -1936212109, 690, 485], // 128
    ["Сигнальный огонь", "Flare", true, -1564193152, 250, 180], // 129
    ["Граната", "Grenade", true, 290600267, 890, 410], // 130
    ["Коктейль Молотова", "Molotov", true, -880609331, 660, 720], // 131
    ["Неконтактная мина", "ProximityMine", true, 1876445962, 850, 1200], // 132
    ["Самодельная бомба", "PipeBomb", true, 848107085, 430, 180], // 133
    ["Снежок", "Snowball", true, 1297482736, 250, 310], // 134
    ["Бомба-липучка", "StickyBomb", true, -1110203649, 750, 1200], // 135
    ["Слезоточивый газ", "BZGas", true, 1591549914, 690, 485], // 136

    ["Парашют", "Parachute", true, -1679378668, 3200, 7500], // 137

    ["Купюра 1$", "", true, 1814532926, 1, 1], // 138
    ["Купюра 100$", "", true, 1597489407, 1, 1], // 139
    ["Маленькая пачка 100$", "", true, -1170050911, 100, 100], // 110
    ["Большая пачка 100$", "", true, -1448063107, 300, 300], // 141

    ["Упаковка кокаина 1кг", "", false, 525896218, 1000, 1000], // 142
    ["Упаковка марихуаны 200г", "", false, -395076527, 200, 1000], // 143
    ["Упаковка кокаина 5кг", "", false, -1688127, 5000, 5000], // 144
    ["Упаковка марихуаны 800г", "", false, -680115871, 800, 4000], // 145

    ["Коробка патронов 12.7mm", "", true, 1843823183, 8900, 1568], //146 / 60
    ["Коробка патронов сингального пистолета", "", true, 1843823183, 1600, 1568], //147 / 10
    ["Коробка патронов феерверка", "", true, 1843823183, 1600, 1568], //148 / 1
    ["Коробка патронов RPG", "", true, 1843823183, 2200, 1568], //149 / 120
    ["Коробка патронов", "", true, 1843823183, 3800, 1568], //150 / 10
    ["Коробка подствольных гранат", "", true, 1843823183, 3800, 1568], //151 / 10
    ["Коробка патронов Stinger", "", true, 1843823183, 1500, 1568], //152 / 1
    ["Коробка патронов 9mm (SMG)", "", true, 190687980, 1140, 432], //153 / 140

    ["Кокаин (10гр)", "", false, 1808635348, 10, 10], //154
    ["Лечебная марихуана (10гр)", "", false, 671777952, 10, 50], //155

    ["Кокаин (50гр)", "", false, 1808635348, 50, 50], //156
    ["Лечебная марихуана (50гр)", "", false, 671777952, 50, 250], //157

    ["Амфетамин", "", false, 1808635348, 1, 1], //158
    ["DMT", "", false, 1808635348, 1, 1], //159
    ["Мефедрон", "", false, 1808635348, 1, 1], //160
    ["Кетамин", "", false, 671777952, 1, 5], //161
    ["LSD", "", false, 671777952, 1, 5], //162

    ["Упаковка амфетамина 1кг", "", false, 525896218, 1000, 1000], // 163
    ["Упаковка амфетамина 5кг", "", false, -1688127, 5000, 5000], // 164

    ["Упаковка DMT 1кг", "", false, 525896218, 1000, 1000], // 165
    ["Упаковка DMT 5кг", "", false, -1688127, 5000, 5000], // 166

    ["Упаковка мефедрона 1кг", "", false, 525896218, 1000, 1000], // 167
    ["Упаковка мефедрона 5кг", "", false, -1688127, 5000, 5000], // 168

    ["Упаковка кетамина 1кг", "", false, 1430410579, 1000, 3000], // 169
    ["Упаковка LSD 1кг", "", false, 1430410579, 1000, 3000], // 170

    ["Амфетамин (10гр)", "", false, 1808635348, 10, 10], //171
    ["DMT (10гр)", "", false, 1808635348, 10, 10], //172
    ["Мефедрон (10гр)", "", false, 1808635348, 10, 10], //173
    ["Кетамин (10гр)", "", false, 671777952, 10, 50], //174
    ["LSD (10гр)", "", false, 671777952, 10, 50], //175

    ["Амфетамин (50гр)", "", false, 1808635348, 50, 50], //176
    ["DMT (50гр)", "", false, 1808635348, 50, 50], //177
    ["Мефедрон (50гр)", "", false, 1808635348, 50, 50], //178
    ["Кетамин (50гр)", "", false, 671777952, 50, 250], //179
    ["LSD (50гр)", "", false, 671777952, 50, 250], //180

    ["Деревянный ящик Gray Tea", "", false, -1147461795, 15000, 500000], //181
    ["Коробка Листов A4", "", false, 1465830963, 2500, 40000], //182
    ["Коробка Redwood", "", false, 1465830963, 2500, 35000], //183
    ["Коробка Clucking Bell", "", false, 250374685, 15000, 70000], //184
    ["Коробка Jo Jo diet Cola", "", false, -1244905398, 8000, 25000], //185
    ["Коробка Craft", "", false, -517243780, 40000, 70000], //186
    ["Коробка Fish and Roll", "", false, -1563678327, 60000, 450000], //187
    ["Деревянный ящик GoPostal", "", false, -1649986476, 19000, 300000], //188
    ["Огромная деревянный ящик", "", false, 1955876122, 420000, 5000000], //189
    ["Важная деревянный ящик", "", false, 307713837, 120000, 1250000], //190
    ["Коробка из китая", "", false, -1513883840, 35000, 450000], //191
    ["Важная коробка", "", false, -1438964996, 12000, 250000], //192
    ["Маленькая коробка", "", false, -721895765, 4000, 55000], //193

    ["Полосатая бочка", "", false, 546252211, 30000, 5000], //194
    ["Ограждение со стрелкой", "", false, 1867879106, 8000, 5000], //195
    ["Длинное ограждение", "", false, -205311355, 10000, 5000], //196
    ["Деревянное ограждение", "", false, 1072616162, 5000, 5000], //197
    ["Деревянное ограждение с огнём", "", false, 1329951119, 5000, 5000], //198
    ["Полицейское огорождение", "", false, -143315610, 9000, 5000], //199
    ["Длинный полосатый конус", "", false, 939377219, 1000, 3000], //200
    ["Полосатый конус", "", false, 1245865676, 1000, 3000], //201
    ["Красный конус", "", false, 862664990, 1000, 3000], //202
    ["Длинный конус с огнями", "", false, -1587301201, 1000, 3000], //203

    ["Капсула с таблетками", "", false, -2127785247, 50, 25], //204
    ["Огромная стекляная бутыль", "", false, -1382355819, 3000, 6750], //205
    ["Капсула с таблетками", "", false, -756465278, 50, 30], //206
    ["Бутыль", "", false, 393961710, 250, 250], //207
    ["Сироп", "", false, 1648892290, 120, 170], //208
    ["Большая стекляная банка", "", false, 566302905, 1500, 4200], //209
    ["Стекляная банка", "", false, -2034834785, 500, 1400], //210
    ["Контейнер с пробирками", "", false, -330775550, 4500, 6000], //211
    ["Контейнер для пробирок", "", false, -192665395, 2000, 6000], //212
    ["Пробирка", "", false, -2022085894, 500, 60], //213
    ["Шприц", "", false, -61966571, 50, 6], //214
    ["Аптечка", "", false, 678958360, 500, 880], //215
    ["Бинт", "", false, 546339338, 70, 280], //216
    ["Большой бинт", "", false, 580223600, 120, 410], //217
    ["Таблетки", "", false, -1129328507, 20, 10], //218
    ["Бутыль с перекисью водорода", "", false, 1254553771, 3000, 8000], //219
    ["Упаковка таблеток", "", false, 1787587532, 50, 130], //220
    ["Антипохмелин", "", false, 1547095841, 12, 130], //221
    ["Упаковка таблеток", "", false, 1174512311, 50, 130], //222

    ["Сырое мясо кабана", "", false, 936464539, 4000, 10000], //223 a_c_boar
    ["Сырое мясо ястреба", "", false, 936464539, 300, 2000], //224 a_c_chickenhawk
    ["Сырое мясо коровы", "", false, 936464539, 4000, 10000], //225 a_c_cow
    ["Сырое мясо баклана", "", false, 936464539, 290, 1500], //226 a_c_cormorant
    ["Сырое мясо оленя", "", false, 936464539, 4000, 15000], //227 a_c_deer
    ["Сырое мясо курицы", "", false, 936464539, 290, 1500], //228 a_c_hen
    ["Сырое мясо свиньи", "", false, 936464539, 4000, 10000], //229 a_c_pig
    ["Сырое мясо кролика", "", false, 936464539, 500, 3000], //230 a_c_rabbit_01
    ["Сырое мясо крысы", "", false, 936464539, 50, 500], //231 a_c_rat

    ["Мясо кабана", "", false, 936464539, 4000, 10000], //232
    ["Мясо ястреба", "", false, 936464539, 300, 2000], //233
    ["Мясо коровы", "", false, 936464539, 4000, 10000], //234
    ["Мясо баклана", "", false, 936464539, 290, 1500], //235
    ["Мясо оленя", "", false, 936464539, 4000, 12000], //236
    ["Мясо курицы", "", false, 936464539, 290, 1500], //237
    ["Мясо свиньи", "", false, 936464539, 4000, 10000], //238
    ["Мясо кролика", "", false, 936464539, 500, 3000], //239
    ["Мясо крысы", "", false, 936464539, 100, 1000], //240

    ["Сырое мясо тунца", "", false, 936464539, 1000, 3000], //241
    ["Сырое мясо окуня", "", false, 936464539, 300, 800], //242
    ["Сырое мясо краба", "", false, 936464539, 600, 4000], //243
    ["Сырое мясо лосося", "", false, 936464539, 290, 1000], //244
    ["Сырое мясо креветок", "", false, 936464539, 290, 600], //245

    ["Мясо тунца", "", false, 936464539, 1000, 3000], //246
    ["Мясо окуня", "", false, 936464539, 300, 800], //247
    ["Мясо краба", "", false, 936464539, 600, 4000], //248
    ["Мясо лосося", "", false, 936464539, 290, 1000], //249
    ["Мясо креветок", "", false, 936464539, 290, 600], //250

    ["Удочка", "", false, 1338703913, 3560, 14900], //251
    ["Бронежилет", "", false, 701173564, 3560, 14900], //252
    ["Игральные кости", "", false, -1803909274, 50, 6], //253

    ["Маленький розовый член", "", false, -422877666, 250, 195], //254
    ["Красный вибратор ", "", false, -463441113, 450, 440], //255
    ["Фиолетовый член", "", false, -731262150, 330, 290], //256
    ["Кожаный член", "", false, -1980613044, 320, 285], //257
    ["Позолоченный член", "", false, 2009373169, 390, 180], //258
    ["Металлический член", "", false, -1921596075, 390, 180], //259
    ["Большой резиновый член", "", false, 1333481871, 950, 2100], //260
    ["Анальная смазка", "", false, 1553232197, 250, 540], //261

    ["C4 (Мощная)", "StickyBomb", false, -1110203649, 750, 1200], //262
    ["Специальная отмычка", "", false, -1803909274, 50, 6], //263
    ["Маска", "", true, -1211793417, 400, 1350], //264
    ["Одежда", "", true, -1158162337, 2000, 4500], //265
    ["Штаны", "", true, -1158162337, 2000, 4500], //266
    ["Обувь", "", true, 101151147, 1500, 3000], //267
    ["Аксессуар", "", true, 1267833770, 400, 1200], //268

    ["Головной убор", "", true, 1267833770, 500, 1500], //269
    ["Очки", "", true, 1298569174, 200, 350], //270
    ["Серьги", "", true,1267833770, 150, 90], //271
    ["Часы", "", true, 1267833770, 250, 300], //272
    ["Браслет", "", true, 1267833770, 250, 300], //273
    ["Маска", "", true, 1267833770, 400, 1200], //274

    ["Коробка отмычек", "", false, 1267833770, 500, 60], //275
    ["Коробка спец. отмычек", "", false, 1267833770, 1500, 180], //276

    ["Лотерейный билет", "", false, 406712611, 80, 410], //277
    ["Спец. Аптечка", "", false, 678958360, 500, 880], //278
];
* */
