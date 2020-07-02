import React from 'react';
import './css/main.css'
import Header from './components/Header';
import Content from './components/Content'
import EventManager from "../../EventManager";

class AccountMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            activePage: 1,
            accountId: 0,
            nick: 'Test',
            balance: 0,
            generalData: {
                nickname: "Andrey Knyazev",
                fraction: "LSPD",
                gender: "Мужской",
                age: "30",
                husband: "Name Name",
                hours: "300",
                lastlogin: "01.07.2020 12:23",
                created: "01.05.2020 11:00",
                friends: 100,
                maxFriends: 100,
                death: 32,
                maxdeath: 100,
                kills: 100,
                maxkills: 100,
                status: "Гражданин США",
                statusDate: "_________",
                pocketmoney: "100000000",
                cardmoney: "30000000",
                medDate: "01.01.2020",
                medPercent: "активна",
                medActive: 100
            },
            generalList: [
                {title: 'Репутация', subtitle: '12323'},
                {title: 'Репутация', subtitle: 'идеальная'},
                {title: 'Репутация', subtitle: 'идеальная'},
                {title: 'Репутация', subtitle: 'идеальная'},
                {title: 'Репутация', subtitle: 'идеальная'},
                {title: 'Репутация', subtitle: 'идеальная'},
                {title: 'Репутация', subtitle: 'идеальная'},
            ],
        }
    }

    componentDidMount() {
        EventManager.addHandler('accmain', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'showOrHide') {
                let status = !this.state.show;
                this.setState({ show: status })
                try {
                    mp.trigger('client:mainMenu:status', status); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
            } else if (value.type === 'activePage') {
                this.setState({activePage: value.page})
            } else if (value.type === 'updateInfo') {
                this.setState({accountId: value.accountId})
                this.setState({nick: value.nick})
                this.setState({balance: value.balance})
            } else if (value.type === 'updateInfoGeneral') {
                this.setState({generalList: value.generalList})
                this.setState({generalData: value.generalData})
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('accmain');
    }

    onChangePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    handleKeyPress = (key) => {
        if (key === 81) {
            if (this.state.activePage === 0) {
                this.setState({
                    activePage: 5
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage - 1}
                ))
            }
        }
        else if (key === 69) {
            if (this.state.activePage === 5) {
                this.setState({
                    activePage: 0
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage + 1}
                ))
            }
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="accountmenu">
                <Header
                    accountId={this.state.accountId}
                    donateBalance={this.state.balance}
                    nick={this.state.nick}
                />
                <Content
                    page={this.state.activePage}
                    onChangePage={this.onChangePage}
                    handleKeyPress={this.handleKeyPress}
                    generalList={this.state.generalList}
                    generalData={this.state.generalData}
                />
            </div>
        )
    }
}

export default AccountMenu;
