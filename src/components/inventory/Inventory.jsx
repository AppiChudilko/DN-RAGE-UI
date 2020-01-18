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
      player_name: "Nika Kondr",
      player_id: 456,
      craft: false,
      secondary_inv_open: false, // Багажник открыт/закрыт
      crafting_succes: false,
      x: '',
      y: '',
      inter_show: false,
      inter_menu_selected: { item: {}, source: '' }, // Сюда автоматически записывается выбранный предмет для взаимодействия через меню
      weight_now: 20,
      weight_max: 70000,
      secondary_weight_now: 20,
      secondary_weight_max: 1000000,
      trade_ids: [], // Сюда записываются ID ближайших игроков для торговли
      loadw_ids: [{name: "P90", id: 28}], // Сюда записываются данные оружия в экипировке которое можно зарядить выбранными патронами
      upgradew_ids: [{name: "P90", id: 28}], // Сюда записываются данные оружия в экипировке которое можно зарядить выбранными патронами

      inter_menu: [ // Пункты меню (генерируются динамично, в зависимости от выбранного предмета)
        { name: "Выбрать", action: "select", show: false, color: '#4CAF50' },
        { name: "Разрядить", action: "unloadW", show: false },

        { name: "Надеть", action: "put_on", show: false, color: '#4CAF50' },
        { name: "Модифицировать", action: "put_on_gun", show: false, color: '#4CAF50' },
        { name: "Использовать", action: "use", show: false, color: '#4CAF50' },
        { name: "Употребить", action: "consume", show: false, color: '#4CAF50' },
        { name: "Съесть", action: "eat", show: false, color: '#4CAF50' },
        { name: "Выпить", action: "drink", show: false, color: '#4CAF50' },
        { name: "Экипировать", action: "equip", show: false, color: '#4CAF50' },
        { name: "Зарядить", action: "loadw", show: false, color: '#4CAF50' },

        { name: "Информация о билете", action: "infoLoto", show: false },

        { name: "Взять 1гр.", action: "take1gr", show: false },
        { name: "Взять 10гр.", action: "take10gr", show: false },
        { name: "Взять 50гр.", action: "take50gr", show: false },
        { name: "Взвесить", action: "weightGr", show: false },

        { name: "Взять 1гр.", action: "take1gr", show: false },

        { name: "Посчитать", action: "countItems", show: false },
        { name: "Посчитать", action: "countMoney", show: false },
        { name: "Посчитать", action: "countPt", show: false },

        { name: "Передать", action: "give", show: true },

        { name: "Открыть сумку", action: "openBag", show: false, color: '#2196F3' },
        { name: "Переложить", action: "move", show: false, color: '#2196F3' },
        { name: "Взять", action: "take", show: false, color: '#2196F3' },

        { name: "Информация о предмете", action: "infoItem", show: false },

        { name: "Снять", action: "take_off", show: false },
        { name: "Убрать в инвентарь", action: "unequip", show: false },

        { name: "Выбросить", action: "drop", show: false, color: '#FF9800' },
        { name: "Закрыть", action: "close", show: false, color: '#f44336' },
      ],

      items: [ // Инвентарь
        { id: 1, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
        { id: 2, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
        { id: 3, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
        { id: 4, item_id: 14, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // айди предмета из базы
        { id: 5, item_id: 279, name: "Патроны", volume: 15, desc: "", counti: 0, params: {} },
        { id: 27, item_id: 95, name: "HK-416", volume: 15, desc: "AR-0001244", counti: 0, params: { slot1:true, slot2:false, slot3: true, slot4:false } },
        { id: 28, item_id: 109, name: "P90", volume: 15, desc: "SM-0001244", counti: 0, params: { slot1:false, slot2:true, slot3: true, slot4:true } },
        { id: 29, item_id: 115, name: "Пушка шаталка", volume: 15, desc: "AR-0001244", counti: 0, params: { slot1:false, slot2:false, slot3: false, slot4:false } },
        { id: 30, item_id: 116, name: "Чёткая снайпа", volume: 15, desc: "SM-0001244", counti: 0, params: { slot1:true, slot2:true, slot3: true, slot4:true } },
        { id: 31, item_id: 117, name: "Выбор твоей бабушки", volume: 15, desc: "AR-0001244", counti: 0, params: {} },
        { id: 32, item_id: 118, name: "Какая то хрень", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
        { id: 33, item_id: 119, name: "Похоже на AWP", volume: 15, desc: "AR-0001244", counti: 0, params: {} },
        { id: 34, item_id: 120, name: "Пистолет-обрез?", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
        { id: 35, item_id: 121, name: "Ракетница", volume: 15, desc: "AR-0001244", counti: 0, params: {} },
        { id: 36, item_id: 122, name: "Гранатомёт", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
        { id: 37, item_id: 264, name: "Сумка", volume: 15, desc: "SM-0001244", counti: 0, params: {} },
        
      ],
      itemsCounted: [ // Сюда переписываются все предметы которые стакаются при обновлении инвентаря для правильного отображения
      ],

      secondary_items: [ // Багажник
        { id: 15, item_id: 1, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }, // secondary_items.id Уникальный id предмета из базы (не должны повторяться)
      ],
      secondary_itemsCounted: [ // Сюда переписываются все предметы которые стакаются при обновлении инвентаря для правильного отображения
      ],
      secondary_items_owner_id: 0,
      secondary_items_owner_type: 0,

      selected_item: {},

      // Надетые на персонажа предметы
      equipment_outfit: [ // equipment_outfit.id Уникальный id предмета из базы (не должны повторяться)
        //{ id: 15, item_id: 264, name: "Бургер", volume: 15, desc: "", counti: 0, params: {} }
      ],

      itemsById: { // В массивах должны быть айди всех предметов разного типа
        food: [1], // Можно "съесть"
        drinks: [2], // Можно "выпить"
        usable: [4], // Можно "использовать"
        consumable: [3], // Можно "употребить"
        bag: [264, 263], // Открыть сумку
        equipable: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137], // Можно "экипировать"
        ammo: [279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292], // Предметы которыми можно зарядить оружие (патроны)
        countPt: [279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292], // Предметы которыми можно зарядить оружие (патроны)
        putOnGun: [293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473], // Предметы которыми можно зарядить оружие (патроны)
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
        bag: [264, 263], // Сумка
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
          { slot: "outf-bag", equipped: false, type: 'bag' },
        ],
        [
          { slot: "outf-clock", equipped: false, type: 'clock' },
          { slot: "outf-phone", equipped: false, type: 'phone' },
          { slot: "outf-money", equipped: false, type: 'money' },
          { slot: "outf-card", equipped: false, type: 'card' },
        ],
      ],

      equipment_weapon: [ // Экипированное оружие
      ],
      selected_weapon_id: 0,
      selected_weapon_item_id: 0,
      updateItemIcons_primary_timeout: false,
      updateItemIcons_secondary_timeout: false,
    }
  }

  componentDidMount() {
    EventManager.addHandler('inventory', value => {
      if (value.type === 'show') { this.setState({ show: true }) }
      if (value.type === 'showOrHide') {
        let status = !this.state.show;
        if(!status) this.closeInterMenu(null, { action: null });
        mp.trigger('client:inventory:status', status); // eslint-disable-line
        this.setState({ show: status })

        if (status == false) {
          this.setState({ secondary_inv_open: false });
          this.setState({ secondary_items: [] });
          this.setState({ secondary_items_owner_id: 0 });
          this.setState({ secondary_items_owner_type: 0 });
        }
      }
      if (value.type === 'updateEquip') {
        this.setState({ outfit: value.outfit })
      }
      if (value.type === 'updateItems') {
        console.log(value.items);
        this.setState({ items: value.items })
      }
      if (value.type === 'updateEquipItems') {
        this.setState({ equipment_outfit: value.items })
      }
      if (value.type === 'updateSubItems') {
        this.setState({ secondary_inv_open: true });
        this.setState({ secondary_items: value.items });
        this.setState({ secondary_items_owner_id: value.ownerId });
        this.setState({ secondary_items_owner_type: value.ownerType });
      }
      if (value.type === 'updateWeaponItems') {
        this.setState({ equipment_weapon: value.items });

        if (this.state.selected_weapon_id == 0) {
          this.setState({ craft: false });
          this.setState({ selected_weapon_id: this.state.equipment_weapon[0].id });
        }
      }
      if (value.type === 'updateLabel') {
        this.setState({ player_name: value.uname });
        this.setState({ player_id: value.uid });
      }
      if (value.type === 'updateMaxW') {
        this.setState({ weight_max: value.val })
      }
      if (value.type === 'updateSubMax') {
        this.setState({ secondary_weight_max: value.maxSum })
      }
      if (value.type === 'updateTrade') {
        this.setState({ trade_ids: value.idList })
      }
      if (value.type === 'updateSelectWeapon') {
        if (value.selectId > 0)
          this.setState({ craft: false });
        this.setState({ selected_weapon_id: value.selectId });
      }
      if (value.type === 'weaponToInventory') {
        this.state.equipment_weapon.forEach((item) => {
          if (value.itemId == item.id) {
            this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) })
            this.setState({ items: this.state.items.concat(item) })
          }
        });
      }
      if (value.type === 'removeItemId') {
        this.state.items.forEach((item) => {
          if (value.itemId == item.id) {
            this.setState({ items: this.arrayRemove(this.state.items, item) })
          }
        });
      }
      if (value.type === 'updateItemIdCount') {
        this.state.items.forEach((item) => {
          if (value.itemId == item.id) { //TODO мб не правильно сделал
            let newItem = item;
            this.setState({ items: this.arrayRemove(this.state.items, item) });
            newItem.counti = value.count;
            this.setState({ items: this.state.items.concat(newItem) });
          }
        });
      }
      if (value.type === 'updateWeaponParams') {
        this.state.equipment_weapon.forEach((item, i) => { //TODO мб не правильно сделал
          if (value.itemId == item.id) {
            let newItem = item;
            this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) });
            newItem.params = value.params; //TODO обвесы не обновляются почему-то сами иокнки
            this.setState({ equipment_weapon: this.state.equipment_weapon.concat(newItem) });
          }
        });
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

    if(this.state.selected_weapon_id === 0) this.setState({craft: true});
    this.setState({selected_weapon_item_id: this.getSelectedWeaponById().item_id});

    this.checkOutfit() // Правильное отображение иконок одежды и прочего outfit'a
    this.updateItemIcons('primary')
    this.updateItemIcons('secondary')
    this.sumWeightInventory()
    this.sumWeightSecondaryInventory()
  }

  componentDidUpdate(prevProp, prevState) {

    if (this.state.equipment_outfit !== prevState.equipment_outfit) { // Обновляет отображение outfit'a при изменении this.state.equipment_outfit
      this.checkOutfit()
    }
    if (this.state.items !== prevState.items) {// Обновляем primary
      this.updateItemIcons('primary')
      this.sumWeightInventory()
    }
    if (this.state.secondary_items !== prevState.secondary_items) { // Обновляем secondary
      this.updateItemIcons('secondary')
      this.sumWeightSecondaryInventory()
    }
    if (this.state.trade_ids !== prevState.trade_ids) { // Показвыает в меню список ID игроков рядом при обновлени this.state.trade_ids
      this.updateTradeMenu()
    }
    if (this.state.loadw_ids !== prevState.loadw_ids) { // Показвыает в меню список ID игроков рядом при обновлени this.state.trade_ids
      this.updateLoadWMenu()
    }
    if (this.state.upgradew_ids !== prevState.upgradew_ids) { // Показвыает в меню список ID игроков рядом при обновлени this.state.trade_ids
      this.updateUpgradeWMenu()
    }
    if(this.state.selected_weapon_id !== prevState.selected_weapon_id) {
      if(this.state.selected_weapon_id === 0) this.setState({craft: true});
      this.setState({selected_weapon_item_id: this.getSelectedWeaponById().item_id});
    }
  }
  getSelectedWeaponById(){
    let item = { item_id: 0 }
    for(let i = 0; i<this.state.equipment_weapon.length; i++){
      if(this.state.equipment_weapon[i].id === this.state.selected_weapon_id){
        item = this.state.equipment_weapon[i];
      }
    }
    return item;
  }
  sumWeightInventory() {
   let items_inv = this.state.items;
   let sum = 0
    for (var i=0; i<items_inv.length; i++) {
      sum += parseInt(items_inv[i].volume)      
    }
    this.setState({weight_now: sum})    
  }
  sumWeightSecondaryInventory() {
    let items_secondary_inv = this.state.secondary_items;
    let sum = 0
    for (var i=0; i<items_secondary_inv.length; i++) {
      sum += parseInt(items_secondary_inv[i].volume)
    }
    this.setState({secondary_weight_now: sum})
  }
  numberToK(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
  }
  notifyToClient(text) {
    mp.trigger('client:inventory:notify', text); // eslint-disable-line
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
    })
    inventory === 'primary' ?
    this.setState({items: items_copy}, () => { this.setState({updateItemIcons_primary_timeout: false}); this.updateStacks('primary') })
    :
    this.setState({secondary_items: items_copy}, () => { this.setState({updateItemIcons_secondary_timeout: false}); this.updateStacks('secondary') })
  }
  updateTradeMenu(){
    let menu = [...this.state.inter_menu]
    let index = -1
    menu.forEach((item) => {
      index = menu.indexOf(item)
      if(item.action === 'trade_id'){
        if (index !== -1) menu.splice(index, 1)
      } else {
        if(item.action !== 'close') menu[index].show = false
      }
    })
    let trade_ids_copy = [...this.state.trade_ids]
    trade_ids_copy.forEach((id) => {
      menu.unshift({name: "ID: " + id, trade_player_id: id, action: "trade_id", show: true})
    })
    this.setState({inter_menu: menu})
  }
  updateLoadWMenu(){
    let menu = [...this.state.inter_menu]
    let index = -1
    menu.forEach((item) => {
      index = menu.indexOf(item)
      if(item.action === 'loadw_id'){
        if (index !== -1) menu.splice(index, 1)
      } else {
        if(item.action !== 'close') menu[index].show = false
      }
    })
    let loadw_ids_copy = [...this.state.loadw_ids]
    loadw_ids_copy.forEach((item) => {
      menu.unshift({name: item.name, loadw_id: item.id, action: "loadw_id", show: true})
    })
    this.setState({inter_menu: menu})
  }
  updateUpgradeWMenu(){
    let menu = [...this.state.inter_menu]
    let index = -1
    menu.forEach((item) => {
      index = menu.indexOf(item)
      if(item.action === 'loadw_id'){
        if (index !== -1) menu.splice(index, 1)
      } else {
        if(item.action !== 'close') menu[index].show = false
      }
    })
    let upgradew_ids_copy = [...this.state.upgradew_ids]
    upgradew_ids_copy.forEach((item) => {
      menu.push({name: item.name, upgradew: JSON.stringify(item.item), action: "upgradew_id", show: true})
    })
    this.setState({inter_menu: menu})
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
      let isStack = true
      let found = false
      if (item.item_id == 8 || item.item_id == 41 || 
        item.item_id == 42 || item.item_id == 43 || 
        item.item_id == 44 || item.item_id == 50 || 
        item.item_id == 51 || item.item_id == 52 || 
        item.item_id == 53 || item.item_id == 252 ||
        item.item_id >= 138 && item.item_id <= 145 ||
        item.item_id >= 154 && item.item_id <= 157 ||
        item.item_id >= 163 && item.item_id <= 180 ||
        item.item_id >= 263 && item.item_id <= 277) {
          isStack = false
        }
      if(isStack){
        updatedItemsCounted.forEach((itemCounted, i) => {
          if(item.item_id === itemCounted.item_id && item.name === itemCounted.name && item.desc === itemCounted.desc && item.counti === itemCounted.counti && JSON.stringify(item.params) === JSON.stringify(itemCounted.params)){
            updatedItemsCounted[i].count++;
            found = true;
          }
        })
      }
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
  getWeaponBorderColor(item_id){ // Возвращает цвет выделения оружия по item_id
    switch(true) {
      case item_id >= 54 && item_id <= 69:
        return '#4CAF50';
      case item_id >= 70 && item_id <= 84:
        return '#FFC107';
      case item_id >= 85 && item_id <= 93:
        return '#f24a4a';
      case item_id >= 127 && item_id <= 136:
        return '#795548';
      default:
        return '#48baf2';
    }
  }
  checkOutfit() { // Это выглядит как "эпичный пиздец", но оно очень хорошо работает :D (обновляет состояние предметов outfit)
    let foundOutfit = [];
    for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
      for (let j = 0; j < Object.values(this.state.outfitById)[i].length; j++) {
        for (let k = 0; k < this.state.equipment_outfit.length; k++) {
          if (Object.values(this.state.outfitById)[i][j] === this.state.equipment_outfit[k].item_id) {
            foundOutfit.push(i);
            if (i < 11) {
              this.setState(prevState => ({ ...prevState.outfit[0][i].equipped = true }))
            } else {
              this.setState(prevState => ({ ...prevState.outfit[1][i - 11].equipped = true }))
            }
          }
        }
      }
    }
    for (let i = 0; i < 15; i++) {
      if (!foundOutfit.includes(i)) {
        if (i < 11) {
          this.setState(prevState => ({ ...prevState.outfit[0][i].equipped = false }))
        } else {
          this.setState(prevState => ({ ...prevState.outfit[1][i - 11].equipped = false }))
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
    let actions = ["give", "drop", "infoItem", "close"] // Стандартные действия для всех предметов (передать, выбросить, закрыть)
    if (source === 'weapon') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('select') // Выбрать оружие
      actions.push('unloadW') // Выбрать оружие
    }
    if (this.state.itemsById.food.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('eat') // Съесть
    }
    if (this.state.itemsById.bag.includes(item.item_id)) { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('openBag') // Открыть сумку

      if (source !== 'outfit')
        actions.push('put_on') // Надеть
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
    if (this.state.itemsById.equipable.includes(item.item_id) && source !== 'weapon' && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('equip') // Экипировать
    }
    if (this.state.itemsById.putOnGun.includes(item.item_id) && source !== 'weapon' && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('put_on_gun') // Надеть на оружие
    }
    if (this.state.itemsById.ammo.includes(item.item_id) && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('loadw') // Зарядить оружие
    }
    if (this.state.itemsById.countPt.includes(item.item_id) && source !== 'secondary_inv') { // По айди предмета (item_id) определяет какие действия можно совершить с предметом
      actions.push('countPt') // Зарядить оружие
    }
    for (let i = 0; i < Object.keys(this.state.outfitById).length; i++) {
      if (Object.values(this.state.outfitById)[i].includes(item.item_id) && source !== 'secondary_inv') {
        if (source !== 'outfit') {
          actions.push('put_on') // Надеть
          break;
        } else {
          actions.push('take_off') // Снять
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
    if (source === 'outfit') {
      if (this.checkItem(this.getOutfitByType(item.type)[0], 'outfit') !== null) {
        if (this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 263 || this.checkItem(this.getOutfitByType(item.type)[0], 'outfit').item_id === 264){
          actions.push('openBag') // Открыть сумку
        }
      }
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
  giveItemMenu(){ // Тут нужно получать ID ближайших игроков для передачи предмета
    /*let trade_ids_copy = []
    let max = 1000 // Эта строка для теста (генерирует рандомные ID игроков для торговли)
    let min = 1 // Эта строка для теста (генерирует рандомные ID игроков для торговли)
    for(let i = 0; i<6; i++){ // Эта строка для теста (генерирует рандомные ID игроков для торговли)
      trade_ids_copy.push(Math.floor(Math.random() * (max - min + 1) ) << 0) // Эта строка для теста (генерирует рандомные ID игроков для торговли)
    }
    this.setState({trade_ids: ['']}) // Записывает ID ближайших игроков для передачи предмета*/
    mp.trigger('client:inventory:giveItemMenu'); // eslint-disable-line
  }
  loadwItemMenu(){ // Тут нужно получать ID ближайших игроков для передачи предмета
    let loadw_ids_copy = []
    for(let i = 0; i<this.state.equipment_weapon.length; i++){ // Эта строка для теста (получает всё экипированное оружие)
      loadw_ids_copy.push({name: this.state.equipment_weapon[i].name, id: this.state.equipment_weapon[i].item_id}) // Эта строка для теста (получает всё экипированное оружие)
    }
    this.setState({loadw_ids: loadw_ids_copy}) // Эта строка для теста (записывает всё экипированное оружие)
  }
  upgradewItemMenu(){ // Тут нужно получать ID ближайших игроков для передачи предмета
    let upgradew_ids_copy = []
    for(let i = 0; i<this.state.equipment_weapon.length; i++){ // Эта строка для теста (получает всё экипированное оружие)
      upgradew_ids_copy.push({name: this.state.equipment_weapon[i].name, item: this.state.equipment_weapon[i]}) // Эта строка для теста (получает всё экипированное оружие)
    }
    this.setState({upgradew_ids: upgradew_ids_copy}) // Эта строка для теста (записывает всё экипированное оружие)
  }
  countPtItemMenu(item){ // Тут нужно получать ID ближайших игроков для передачи предмета
    this.notifyToClient('В коробке ~g~' + parseInt(item.counti) + 'пт.');
  }
  unloadWItemMenu(item){ // Тут нужно получать ID ближайших игроков для передачи предмета
    mp.trigger('client:inventory:unloadW', item.item_id); // eslint-disable-line
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
      case "openBag": // Открыть сумку
        this.itemOpenBag(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "infoItem": // Открыть сумку
        this.itemInfoItem(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source)
        break;
      case "give": // Передать
        this.giveItemMenu();
        return;
      case "loadw": // Зарядить
        this.loadwItemMenu();
        return;
      case "put_on_gun": // Экипировать
        this.upgradewItemMenu()
        return;
      case "countPt": // Посчитать патроны
        this.countPtItemMenu(this.state.inter_menu_selected.item);
        break;
      case "unloadW": // Посчитать патроны
        this.unloadWItemMenu(this.state.inter_menu_selected.item);
        break;
      case "trade_id": // Выбор ID, кому передать
        this.itemGive(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source, button.trade_player_id);
        break;
      case "loadw_id": // Выбор ID оружия для зарядки
        this.loadW(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source, button.loadw_id);
        break;
      case "upgradew_id": // Выбор ID оружия для зарядки
        this.upgradeW(this.state.inter_menu_selected.item, this.state.inter_menu_selected.source, button.upgradew);
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
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          if(this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max){
            this.notifyToClient('~r~Хранилище переполнено ;c');
            return;
          }
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          // mp.call ... переместить в багажник и удалить из инвентаря
          mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          if(this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max){
            this.notifyToClient('~r~Хранилище переполнено ;c');
            return;
          }
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
          mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id.toString(), this.state.secondary_items_owner_type); // eslint-disable-line
          // mp.call ... переместить в багажник, снять с персонажа, и удалить из инвентаря
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          if(this.state.secondary_weight_now + item.volume > this.state.secondary_weight_max){
            this.notifyToClient('~r~Хранилище переполнено ;c');
            return;
          }
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
            if(item.id === this.state.selected_weapon_id) {
              if(this.state.equipment_weapon.length === 0) {
                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
              } else {
                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
              }
            }
          })
          this.setState({ secondary_items: this.state.secondary_items.concat(item) })
          mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
          mp.trigger('client:inventory:moveTo', item.id, item.item_id, this.state.secondary_items_owner_id, this.state.secondary_items_owner_type); // eslint-disable-line
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
          if(this.state.weight_now + item.volume > this.state.weight_max){
            this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
            return;
          }
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          this.setState({ items: this.state.items.concat(item) })
          mp.trigger('client:inventory:moveFrom', item.id, this.state.secondary_items_owner_type); // eslint-disable-line
          // mp.call ... переместить в инвентарь и удалить из багажника
        }
        break;
      default:
        break;
    }
  }
  itemUse(item, source) {
    switch (source) {
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
  itemOpenBag(item, source) {
    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          mp.trigger('client:inventory:openBag', item.id, item.item_id); // eslint-disable-line
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          mp.trigger('client:inventory:openBag', item.id, item.item_id); // eslint-disable-line
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          mp.trigger('client:inventory:openBag', item.id, item.item_id); // eslint-disable-line
        }
        break;
      default:
        break;
    }
  }
  itemInfoItem(item, source) {

    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.notifyToClient(`~b~Имя: ~s~${item.name}\n~b~Объем: ~s~${item.volume}см³`)
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
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
          this.setState({ selected_weapon_id: item.id, craft: false })
          // mp.call ... экипировать и удалить из инвентаря
          mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
        }
        break;
      /* case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          this.setState({ equipment_weapon: this.state.equipment_weapon.concat(item) })
          this.setState({ selected_weapon_id: item.id, craft: false })
          // mp.call ... экипировать и удалить из багажника
        }
        break; */
      default:
        break;
    }
  }
  itemGive(item, source, trade_player_id) {
    this.setState({trade_ids: []});
    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
          // mp.call ... передать и удалить из инвентаря (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
          // mp.call ... передать и удалить из багажника (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
          // mp.call ... передать и удалить с персонажа (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
            if(item.id === this.state.selected_weapon_id) {
              if(this.state.equipment_weapon.length === 0) {
                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
              } else {
                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
              }
            }
          })
          console.log(`Передаю ${item.name}, ID ${item.id}, игроку ID ${trade_player_id}`)
          // mp.call ... передать оружие и удалить из экипировки (item.id - ID предмета, trade_player_id - ID игрока которому нужно передать)
        }
        break;
      default:
        break;
    }
  }
  loadW(item, source, loadw_id) {
    this.setState({ loadw_ids: [] });
    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          //this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... зарядить оружие ID loadw_id и удалить из инвентаря патроны ID item.id
          mp.trigger('client:inventory:loadWeapon', item.id, item.item_id, loadw_id, item.counti); // eslint-disable-line
        }
        break;
      default:
        break;
    }
  }
  upgradeW(item, source, upgradew) {
    this.setState({ upgradew_ids: [] });
    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          //this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... зарядить оружие ID loadw_id и удалить из инвентаря патроны ID item.id
          console.log(upgradew);
          mp.trigger('client:inventory:upgradeWeapon', item.id, item.item_id, upgradew); // eslint-disable-line
        }
        break;
      default:
        break;
    }
  }
  itemDrop(item, source) {
    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          // mp.call ... выбросить и удалить из инвентаря
          mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
        }
        break;
      case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          // mp.call ... выбросить и удалить из багажника

          mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
        }
        break;
      case 'outfit':
        item = this.getOutfitByType(item.type)[0]
        if (this.checkItem(item, 'outfit') !== null) {
          item = this.checkItem(item, 'outfit')
          this.setState({ equipment_outfit: this.arrayRemove(this.state.equipment_outfit, item) })
          // mp.call ... выбросить и снять с персонажа
          mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
          mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
        }
        break;
      case 'weapon':
        if (this.checkItem(item, 'weapon') !== null) {
          item = this.checkItem(item, 'weapon')
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
            if(item.id === this.state.selected_weapon_id) {
              if(this.state.equipment_weapon.length === 0) {
                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
              } else {
                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
              }
            }
          })
          // mp.call ... выбросить и удалить из экипировки

          mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
          mp.trigger('client:inventory:drop', item.id, item.item_id); // eslint-disable-line
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
          if(this.state.weight_now + item.volume > this.state.weight_max){
            this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
            return;
          }
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
      if (this.state.outfit[0][i].type === this.getOutfitType(item) && this.state.outfit[0][i].equipped === true) {
        this.notifyToClient('~r~Предмет уже экипирован, для начала снимите его');
        return;
      }
    }
    for (let i = 0; i < this.state.outfit[1].length; i++) {
      if (this.state.outfit[1][i].type === this.getOutfitType(item) && this.state.outfit[1][i].equipped === true) return;
    }

    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
          // mp.call ... надеть на персонажа и удалить из инвентаря
        }
        break;
       case 'secondary_inv':
        if (this.checkItem(item, 'secondary_inv') !== null) {
          item = this.checkItem(item, 'secondary_inv')
          this.setState({ secondary_items: this.arrayRemove(this.state.secondary_items, item) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
        }
        break;
      default:
        break;
    }
  }
  itemPutOnGun(item, source) {

    switch (source) {
      case 'inventory':
        if (this.checkItem(item, 'inventory') !== null) {
          item = this.checkItem(item, 'inventory')
          this.setState({ items: this.arrayRemove(this.state.items, item) })
          this.setState({ equipment_outfit: this.state.equipment_outfit.concat(item) })
          mp.trigger('client:inventory:equip', item.id, item.item_id, item.counti, JSON.stringify(item.params)); // eslint-disable-line
          // mp.call ... надеть на персонажа и удалить из инвентаря
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
          if(this.state.weight_now + item.volume > this.state.weight_max){
            this.notifyToClient('~r~Ваш инвентарь переполнен ;c');
            return;
          }
          this.setState({ equipment_weapon: this.arrayRemove(this.state.equipment_weapon, item) }, () => {
            if(item.id === this.state.selected_weapon_id) {
              if(this.state.equipment_weapon.length === 0) {
                this.setState({ selected_weapon_id: 0 }) // Убрать выделение с оружия если оно выбрано
              } else {
                this.selectWeapon(this.state.equipment_weapon[0]) // Выбрать перое экипированное оружие (что бы окно оружия не пропало совсем)
              }
            }
          })
          this.setState({ items: this.state.items.concat(item) })
          // mp.call ... снять оружие из экипировки и переместить в инвентарь
          mp.trigger('client:inventory:unEquip', item.id, item.item_id); // eslint-disable-line
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

      mp.trigger('client:inventory:selectWeapon', item.id, item.item_id, item.params.serial); // eslint-disable-line
    }
  }
  checkItem(item, source) { // Проверка и поиск предмета в том или ином source (инвентарь,багажник,экипировка и тд.)
    switch (source) {
      case 'inventory':
        let inventory = this.state.items;

        for (let i = 0; i < inventory.length; i++) {
          /*// mp.trigger('client:events:debug', typeof inventory[i].params); // eslint-disable-line
          // mp.trigger('client:events:debug', JSON.stringify(inventory[i].params)); // eslint-disable-line
          // mp.trigger('client:events:debug', inventory[i].id == item.id); // eslint-disable-line
          // mp.trigger('client:events:debug', inventory[i].id); // eslint-disable-line
          // mp.trigger('client:events:debug', item.id); // eslint-disable-line*/

          if (inventory[i].item_id === item.item_id && inventory[i].name === item.name &&
            inventory[i].desc === item.desc &&
            inventory[i].counti === item.counti && JSON.stringify(inventory[i].params) === JSON.stringify(item.params)) {
            return inventory[i];
          }
        }
        break;
      case 'secondary_inv':
        let secondary_items = this.state.secondary_items;
        for (let i = 0; i < secondary_items.length; i++) {
          if (secondary_items[i].item_id === item.item_id && secondary_items[i].name === item.name && 
            secondary_items[i].desc === item.desc &&
            secondary_items[i].counti === item.counti && JSON.stringify(secondary_items[i].params) === JSON.stringify(item.params)) {
            return secondary_items[i];
          }
        }
        break;
      case 'weapon':
        let equipment = this.state.equipment_weapon;
        for (let i = 0; i < equipment.length; i++) {
          if (equipment[i].item_id === item.item_id && equipment[i].name === item.name && 
            equipment[i].desc === item.desc &&
            equipment[i].counti === item.counti && JSON.stringify(equipment[i].params) === JSON.stringify(item.params)) {
            return equipment[i];
          }
        }
        break;
      case 'outfit':
        let outfit = this.state.equipment_outfit;
        for (let i = 0; i < outfit.length; i++) {
          if (outfit[i].item_id === item.item_id && outfit[i].name === item.name && 
            outfit[i].desc === item.desc &&
            outfit[i].counti === item.counti && JSON.stringify(outfit[i].params) === JSON.stringify(item.params)) {
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
    this.setState({ secondary_inv_open: false});
    mp.trigger('client:inventory:statusSecondary', false);
  }
  closeInventory() {
    mp.trigger('client:inventory:status', false); // eslint-disable-line
    this.setState({ show: false, craft: false })

    this.setState({ secondary_inv_open: false });
    this.setState({ secondary_items: [] });
    this.setState({ secondary_items_owner_id: 0 });
    this.setState({ secondary_items_owner_type: 0 });
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
        <div id="box" onContextMenu={(e)=> e.preventDefault()}>
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
                    <div className="title-inv"><span>Инвентарь</span>
                    <span className="weight-title-inv">({this.numberToK(this.state.weight_now)}/{this.numberToK(this.state.weight_max)})</span> </div>
                    <div className="object-inv-box">
                      {this.state.itemsCounted.map((item, i) => {
                        const index = `item${i}`
                        return (
                          <div className="object-box" key={index} onContextMenu={(e) => this.handlePos(e, item, 'inventory')}>
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
                    <div className="player-inv-name"><span>Имя: {this.state.player_name}</span></div>
                      <div className="player-inv-old"><span>ID Аккаунта: {this.state.player_id}</span></div>
                    </div>
                    <div className="outfit-player-box">
                      {this.state.outfit[0].map((item, i) => {
                        const index = `item-outf${i}`
                        return (
                          <div key={index} className={`${item.slot}` + `${item.equipped ? ' use-outfit' : ''}`} onContextMenu={(e) => this.handlePos(e, item, 'outfit')}></div>
                        )
                      })}
                      <div className="bottom-otf-box">
                        {this.state.outfit[1].map((item, i) => {
                          const index = `items-outf${i}`
                          return (
                            <div key={index} className={`${item.slot}` + `${item.equipped ? ' use-outfit' : ''}`} onContextMenu={(e) => this.handlePos(e, item, 'outfit')}></div>
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
                    {this.state.selected_weapon_id !== 0 ? 
                    <React.Fragment>
                    <input type="radio" name="btn-craft-class" id="btn-craft-class1" checked={!this.state.craft} onChange={this.changeBtnCraft.bind(this)}></input>
                    <label htmlFor="btn-craft-class1" className="btn-craft" style={{ marginRight: 4 + 'px' }}>
                      <div className="bg-color-craft-block img-btn-weapon"></div>
                    </label>
                    <input type="radio" name="btn-craft-class" id="btn-craft-class2" checked={this.state.craft} onChange={this.changeBtnCraft.bind(this)}></input>
                      <label htmlFor="btn-craft-class2" className="btn-craft">
                        <div className="bg-color-craft-block img-btn-cutter"></div>
                      </label>
                    </React.Fragment>
                     : 
                    <React.Fragment>
                     <input type="radio" name="btn-craft-class" id="btn-craft-class2" checked={this.state.craft} onChange={this.changeBtnCraft.bind(this)}></input>
                      <label htmlFor="btn-craft-class2" className="btn-craft">
                        <div className="bg-color-craft-block img-btn-cutter"></div>
                      </label>
                    </React.Fragment>}
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
                          <div className="craft-btn-main">
                          <div className="craft-btn-obj">
                            <span>Создать</span>
                          </div>
                          <div className="craft-help-menu">
                          <span>?</span>
                          </div>
                          </div>
                         
                        </Animated>
                      </React.Fragment>
                      :
                      <React.Fragment>

                        <div className="weapon-player-equip ">
                          {this.state.equipment_weapon.map((item, i) => {
                            const index = `weaponplayer${i}`
                            return (
                              <div key={index} className={`style-weapon-txt-craft ${item.id === this.state.selected_weapon_id ? 'style-weapon-txt-craft-selected' : ''}`}
                               onClick={() => this.selectWeapon(item)} onContextMenu={(e) => this.handlePos(e, item, 'weapon')}
                               style={{ borderColor: this.getWeaponBorderColor(item.item_id) }}>
                                 <span>{item.name}</span>
                                 <span className="style-serial-weapon">{item.desc}</span>
                                 </div>
                            )
                          })}
                        </div>
                        <div className="weapon-craft-box">
                          <div className="liner-weapon-crafting" style={{ background: this.getWeaponBorderColor(this.state.selected_weapon_item_id) }}></div>
                          <div className="box-img-equip-weapon">
                            <div className={this.state.selected_weapon_item_id !== 0 ? "selected-weapon img-" + this.state.selected_weapon_item_id : "weapon-m41"}></div>
                          </div>
                          <div className="main-box-craft-weapon">
                            <div className="square-box-craft-weapon sqr-wp-top">
                              <div className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot1 ? "weapon-mod-active weapon-supressor" : "weapon-mod weapon-supressor" : ""} />
                            </div>
                            <div className="square-box-craft-weapon sqr-wp-top">
                              <div className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot2 ? "weapon-mod-active weapon-flashlight" : "weapon-mod weapon-flashlight" : ""} />
                            </div>
                            <div className="square-box-craft-weapon sqr-wp-top">
                              <div className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot3 ? "weapon-mod-active weapon-grip" : "weapon-mod weapon-grip" : ""} />
                            </div>
                            <div className="square-box-craft-weapon sqr-wp-top">
                              <div className={this.getSelectedWeaponById().item_id !== 0 ? this.getSelectedWeaponById().params.slot4 ? "weapon-mod-active weapon-scope" : "weapon-mod weapon-scope" : ""} />
                            </div>
                            {/* <div className="square-box-craft-weapon sqr-wp-left"></div>
                            <div className="square-box-craft-weapon"></div>
                            <div className="square-box-craft-weapon"></div>
                            <div className="square-box-craft-weapon"></div> */}
                          </div>
                        </div>

                      </React.Fragment>
                    }
                  </div>
                </div>
              </div>
              <div className="invetory-trunk">
                {this.state.secondary_inv_open ?
                    <div>
                      <div className="liner-secondary-inv"></div>
                      <div className="title-secondary-inv"><span>({this.numberToK(this.state.secondary_weight_now)}/{this.numberToK(this.state.secondary_weight_max)})</span></div>
                      <div className="trunk-info-menu">
                        <div className="close-window-craft color-blue-btn" onClick={() => this.closeSecondaryInventory()}></div>
                        {this.state.secondary_itemsCounted.map((item, i) => {
                          const index = `item${i}`
                          return (
                              <div className="object-box-trunk" key={index} onContextMenu={(e) => this.handlePos(e, item, 'secondary_inv')}>
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
                    : ''
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
