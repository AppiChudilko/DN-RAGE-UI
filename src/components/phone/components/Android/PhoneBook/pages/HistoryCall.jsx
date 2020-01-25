import React from 'react';

import MaterialIcon, { colorPalette } from 'material-icons-react';

class HistoryCall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment >
          <div className="title-b-hist">Журнал</div>
          <div className="b-box-history">
          {this.props.history
          .filter(user => user.name.toString().toLowerCase().includes(this.props.filter.toString().toLowerCase()))
          .map((e, i) => {
            let index = `history${i}`
            return (
            <div className="b-box-player" key={index}>
              <img src={e.img} alt="" className="b-img-player" />
              <div className="b-info-playercall">
                <div className="b-inf-name">{e.name}</div>
                <div className="b-inf-data"><MaterialIcon icon={e.icon} size={12} color={e.color} />Декабрь 3</div>
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
export default HistoryCall;
