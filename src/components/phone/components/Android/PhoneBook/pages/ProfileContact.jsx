import React from 'react';

import MaterialIcon, { colorPalette } from 'material-icons-react';

class ProfileContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    this.setState({ contact: this.props.data.selected_contact }, () => {
      console.log(this.state.contact)
    })
  }

  render() {
    return (
      <React.Fragment >
        <div className="u-profilecontact">
          <div className="box-img-pp">
            <figure>
              <img src={this.state.contact.img !== undefined && this.state.contact.img !== '' ?
                this.state.contact.img : 'https://a.rsg.sc//n/socialclub'} alt="" className="p-box-img-player" />
              <div className="p-nameplayer-p">{this.state.contact.name}</div>
            </figure>
          </div>
          <div className="p-topbar">
            <MaterialIcon icon="star_border" size={19} color="#fff" />
            <MaterialIcon icon="delete_forever" size={19} color="#fff" />
          </div>
          <div className="p-info-player">
            <div className="p-box-mob_email">
              {this.state.contact.numbers.map((e, i) => {
                let index = `number${i}`
                return (
                  <div className="number" key={index}>
                    <MaterialIcon icon="phone" size={19} color="#607D8B" />
                    <div className="p-box-num">
                      <div className="p-num-num-p">{e}</div>
                      <div className="p-num-num-p-info">Мобильный</div>
                    </div>
                    <MaterialIcon icon="message" size={19} color="#607D8B" onClick={() => this.props.selectChat(e)} />
                  </div>
                )
              })}
              {this.state.contact.mail !== undefined ?
                <div className="number">
                  <MaterialIcon icon="email" size={19} color="#607D8B" />
                  <div className="p-box-num">
                    <div className="p-num-num-p">{this.state.contact.mail}</div>
                    <div className="p-num-num-p-info">Почта</div>
                  </div>
                  <MaterialIcon icon="message" size={19} color="#607D8B" />
                </div>
                : null
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default ProfileContact;
