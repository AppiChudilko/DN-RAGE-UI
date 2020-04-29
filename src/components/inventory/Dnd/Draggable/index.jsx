import React from 'react'
import PropTypes from 'prop-types'

export default class Draggable extends React.PureComponent {

    state = {
        droppable: null
    }

    drop = () => {
        if (!this.state.droppable) {
            console.log('DnD Inventory: Некорректный droppable элемент')
            return false
        }

        let inventory = this.props.that // Доступ к инвентарю
        const type = this.props.type
        let item = this.props.item

        if (!item || !type || !inventory) {
            console.log('DnD Inventory: Отсутствует одно из свойств')
            return false
        }

        const validTypes = ['put_on', 'take_off', 'move', 'move_all', 'take', 'take_all', 'equip', 'unequip', 'drop']

        let id = this.state.droppable.id

        if (!validTypes.includes(id)) {
            console.log('DnD Inventory: Неверное ID')
            return false
        }

        // Для unequip
        if (id.match('take_off') && type.includes('unequip')) {
            id = 'unequip'
        }

        // Мультиайдишная система для Droppable с багажника в инвентарь
        if (id.match('take_off') && !type.includes('take_off')) {
            id = 'take'
        }

        // Если стак перекладываем - то move_all
        if (id.match('move') && type.includes('move_all')) {
            id = 'move_all'
        }

        // Если стак берём - то take_all
        if (id.match('take') && type.includes('take_all')) {
            id = 'take_all'
        }

        // Если Droppable не предназначена для этого Draggable
        if (!type.includes(id)) {
            console.log('DnD Inventory: Тип не совпадает с ID')
            return false
        }

        // Ответы на действие
        switch (id) {

            case 'put_on': // Надеть
                try { // Внимание. Чтобы точно никакие вещи не надевались из багажника - удалите экшены "Надеть" у предметов во втором инвентаре.
                    if (inventory.getActions(item, 'inventory').includes(id)) {
                        inventory.itemPutOn(item, 'inventory')
                    }
                } catch { inventory.itemPutOn(item, 'secondary_inv') }
                break

            case 'take_off': // Снять
                inventory.itemTakeOff(item, 'outfit')
                break

            case 'move': // Переложить
                if (item.item_id !== undefined) {
                    inventory.moveItem(item, 'inventory')
                } else {
                    // Закомментируйте, если НЕ нужно, чтобы одежду можно было перекладывать с тела в багажник
                    // inventory.moveItem(item, 'outfit')
                }
                break
                
            case 'move_all': // Переложить стак
                inventory.moveAllItem(false, item)
                break

            case 'take': // Взять с багажника
                if (item.item_id !== undefined) {
                    inventory.moveToInventory(item, 'secondary_inv')
                }
                break

            case 'take_all': // Взять с багажника стак
                inventory.moveAllToInventory(false, item)
                break

            case 'equip': // Экипировать
                inventory.itemEquip(item, 'inventory')
                break

            case 'unequip': // Убрать экипировку в инвентарь
                inventory.itemUnequip(item, 'weapon')
                break

            case 'drop': // Выбросить
                if (type.includes('unequip')) {
                    inventory.itemDrop(item, 'weapon')
                } else if (type.includes('move') || type.includes('move_all')) {
                    inventory.itemDrop(item, 'inventory')
                } else if (type.includes('take_off')) {
                    inventory.itemDrop(item, 'outfit')
                } else if (type.includes('take') || type.includes('take_all')) {
                    inventory.itemDrop(item, 'secondary_inv')
                } 
                break

            default:
                break
        }

        return true
    }

    onMouseDown = (event) => {
        if (event.button !== 0) return

        let element = document.getElementById(this.props.id)
        let clone = element.cloneNode(true)

        let shiftX = event.clientX - element.getBoundingClientRect().left
        let shiftY = event.clientY - element.getBoundingClientRect().top

        clone.style.position = 'absolute'
        clone.style.zIndex = 1000

        if (clone.id.includes('weaponplayer')) {
            clone.style.width = '350px'
        }

        document.body.append(clone)

        let that = this

        moveAt(event.pageX, event.pageY)

        function moveAt(pageX, pageY) {
            clone.style.left = pageX - shiftX + 'px'
            clone.style.top = pageY - shiftY + 'px'
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)

            clone.hidden = true
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            clone.hidden = false

            if (!elemBelow) return

            let droppableBelow = elemBelow.closest('.droppable')
            let currentDroppable = that.state.droppable

            if (currentDroppable !== droppableBelow) {
                if (currentDroppable) {
                    that.setState({
                        droppable: null
                    })
                }

                currentDroppable = droppableBelow

                if (currentDroppable) {
                    that.setState({
                        droppable: currentDroppable
                    })
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove)

        clone.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove)
            clone.onmouseup = null
            clone.remove()

            that.drop()
        }
    }

    onDragStart = () => {
        return false
    }
    
    render() {
        return (
            <div
                id={this.props.id}
                onDragStart={this.onDragStart}
                onMouseDown={this.onMouseDown}
            >
                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    item: PropTypes.object,
    children: PropTypes.node
}