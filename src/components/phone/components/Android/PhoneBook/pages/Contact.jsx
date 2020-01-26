import React from 'react';

import MaterialIcon, { colorPalette } from 'material-icons-react';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment >
        <div className="c-contact-box">
        {this.props.contact
        .filter(user => user.name.toString().toLowerCase().includes(this.props.filter.toString().toLowerCase()))
        .sort((a, b) => (a.name > b.name) ? 1 : -1)
        .map((e, i) => {
            let index = `contact${i}`
            return (
          <div className="c-player-contact" key={index} onClick={() => this.props.clickContact(e)}>
            <img src={e.img} alt="" className="c-imgplayer"/>
            <span className="c-nameplayer">{e.name}</span>
            <div className="b-call"><MaterialIcon icon="call" size={19} /></div>
          </div>
           )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default Contact;
