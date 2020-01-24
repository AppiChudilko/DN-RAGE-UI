import React from 'react';
import UFrame from './UFrame';

class UMenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment >
        <div className="u-title">
          <span className="u-texttittle">{this.props.data.title}</span>
        </div>
        <div className="u-li-menu">
          {this.props.data.items.map((e, i) => {
            return (
              <React.Fragment>
                <div className="umenu-family-box">
                  <div className="umenu-title-family">{e.title}</div>
                  {e.umenu.map((e, i) => {
                    return (
                      <UFrame
                        menu={this.props.data.UUID}
                        item={e}
                        key={i}
                        id={i}
                        type={e.type}
                        event={this.callback}
                      />
                    )
                  })}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default UMenuContainer;
