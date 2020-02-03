import React from 'react';
import './css/radioset.css'

class Walkietalkie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      walkietalkie: {
        mode: 'mode',

      }
    }
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        <div className="adaptive position" id="box">
          <div className="radioset-box">
            <div className="position-window">
              <div className="window-radioset">
                <div className="window-blick"></div>
                <div className="position-text-screen">
                  <div className="position-mode">
                    <div className="mode-state">MODE</div>
                  </div>
                  <div className="position-other-txt">
                    <div className="state-other-txt posit-w">W</div>
                    <div className="posit-dcs">DCS</div>
                  </div>
                  <div className="icons-window">
                    <div className="icons-signal"></div>
                    <div className="icons-sound-email">
                      <div className="icons-email"></div>
                      <div className="sound-off position-sound"></div>
                      <div className="icons-battery"></div>
                    </div>
                  </div>
                  <div className="arrow-and-wave">
                    <div className="position-wavenumber">
                      <div className="wave-number">
                        <div className="num-wave-post">
                          <div className="num-wave-first">115</div>
                          <div>.</div>
                          <div className="num-wave-last">500</div>
                        </div>
                        <div className="num-wave-post">
                          <div className="num-wave-first">115</div>
                          <div>.</div>
                          <div className="num-wave-last">500</div>
                        </div>
                      </div>
                    </div>
                    <div className="arrow-cheked position-arrow-last"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-position">
              <div className="button-radioset">
                <div className="button-first">
                  <div className="button-fitst-left">
                    <div className="button-normal menu otstup">
                      <div className="button-normal-in">
                        <p className="button-normal-text">CLR</p>
                      </div>
                    </div>
                    <div className="button-normal ok">
                      <div className="button-normal-in">
                        <p className="button-normal-text">OK</p>
                      </div>
                    </div>
                  </div>
                  <div className="button-first-center">
                    <div className="button-big">
                      <div className="button-big-in">
                        <div className="button-arrow">
                          <div className="arrow-button arr-pos-first"></div>
                        </div>
                        <div className="button-arrow arr-pos">
                          <div className="arrow-button arr-pos-last"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-fitst-right scan">
                    <div className="button-normal otstup">
                      <div className="button-normal-in">
                        <p className="button-normal-text">VOL</p>
                      </div>
                    </div>
                    <div className="button-normal mode">
                      <div className="button-normal-in">
                        <p className="button-normal-text">MODE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-last">
                  <div className="button-small 1 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">1 ABC</p>
                    </div>
                  </div>
                  <div className="button-small 2 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">2 DEF</p>
                    </div>
                  </div>
                  <div className="button-small 3">
                    <div className="button-small-in">
                      <p className="button-small-text">3 GHI</p>
                    </div>
                  </div>
                  <div className="button-small 4 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">4 JKL</p>
                    </div>
                  </div>
                  <div className="button-small 5 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">5 MNO</p>
                    </div>
                  </div>
                  <div className="button-small 6">
                    <div className="button-small-in">
                      <p className="button-small-text">6 PQR</p>
                    </div>
                  </div>
                  <div className="button-small 7 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">7 STU</p>
                    </div>
                  </div>
                  <div className="button-small 8 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">8 VWX</p>
                    </div>
                  </div>
                  <div className="button-small 9">
                    <div className="button-small-in">
                      <p className="button-small-text">9 YZ</p>
                    </div>
                  </div>
                  <div className="button-small 10 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">*</p>
                    </div>
                  </div>
                  <div className="button-small 0 btn-smal-margin">
                    <div className="button-small-in">
                      <p className="button-small-text">0</p>
                    </div>
                  </div>
                  <div className="button-small 11">
                    <div className="button-small-in">
                      <p className="button-small-text">#</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Walkietalkie;
