import React from 'react'
import './css/main.css'
import DialogButton from './components/DialogButton';

class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: 'Имя Фамилия',
            subtitle: 'Сотрудник мэрии',
            qustion: 'Здравствуйте, меня зовут Имя Фамилия, чем могу помочь? ',
            buttons: [
                {
                    text: '1',
                    bgcolor: ''
                },
                {
                    text: '2',
                    bgcolor: ''
                },
                {
                    text: '3',
                    bgcolor: ''
                },
                {
                    text: '4',
                    bgcolor: ''
                }
            ]
        }
    }

    
    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="dialog__container">
                <div className="dialog__content">
                    <span className="dialog__content__name">
                        {this.state.name}
                    </span>
                    <span className="dialog__content__subtitle">
                        {this.state.subtitle}
                    </span>
                    <span className="dialog__content__question">
                        {this.state.qustion}
                    </span>
                    <div className="dialog__content__buttons">
                        {this.state.buttons.map((item, index) => (
                            <DialogButton
                                text={item.text}
                                bgcolor={item.bgcolor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog