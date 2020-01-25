import React from 'react';

import MaterialIcon, { colorPalette } from 'material-icons-react';

class Favorit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment >
          <div className="title-b-hist">Избранное</div>
          <div className="b-box-history">
          {this.props.favorit
          .filter(user => user.name.toString().toLowerCase().includes(this.props.filter.toString().toLowerCase()))
          .map((e, i) => {
            let index = `favorit${i}`
            return (
            <div className="b-box-player" key={index}>
              <img src={e.img} alt="" className="b-img-player" />
              <div className="b-info-playercall">
                <div className="b-inf-name">{e.name}</div>               
              </div>
              <div className="b-call"><MaterialIcon icon="call" size={19} /></div>
            </div>
            )
          })}
          </div>
      </React.Fragment>
    )
  }
}
export default Favorit;
