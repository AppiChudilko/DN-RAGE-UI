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
             let index = `umenucont${i}`
            return (
              <React.Fragment key={index}>
                <div className="umenu-family-box">
                  <div className="umenu-title-family">{e.title}</div>
                  {e.umenu.map((e, i) => {
                    let index1 = `umenu${i}`
                    return (
                      <UFrame
                        menu={this.props.data.UUID}
                        item={e}
                        key={index1}
                        id={i}
                        type={e.type}
                        event={this.callback}
                        openScrollbar={this.props.openScrollbar}
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
