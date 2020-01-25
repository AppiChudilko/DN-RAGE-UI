import React from 'react';

import MaterialIcon, { colorPalette } from 'material-icons-react';
import HistoryCall from './pages/HistoryCall';
import Favorit from './pages/Favorit';
import Contact from './pages/Contact';

class PhoneBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'favorit',
      search: ''
    }
  }
  handleChange(value) {
    this.setState({ page: value });
  }
  handleSearchChange = e => {
    this.setState({ 
      search: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment >
        <div className="phonebook-content">
          <div className="b-bar">
            <div className="b-search">
              <div className="b-imgsearch"><MaterialIcon icon="search" size={19} /></div>
              <input type="text" className="b-inputtext" placeholder="Введите текст для поиска" onChange={this.handleSearchChange}/>
            </div>
            <div className="b-tabsbar">
              <input type="radio" id="b-radio-tabs1" name="b-radio-tabs" defaultChecked="true" onChange={() => this.handleChange('favorit')} />
              <label htmlFor="b-radio-tabs1" className="b-tabs-radio"><MaterialIcon icon="star" size={19} /></label>
              <input type="radio" id="b-radio-tabs2" name="b-radio-tabs" onChange={() => this.handleChange('history')} />
              <label htmlFor="b-radio-tabs2" className="b-tabs-radio"><MaterialIcon icon="access_time" size={19} /></label>
              <input type="radio" id="b-radio-tabs3" name="b-radio-tabs" onChange={() => this.handleChange('contact')} />
              <label htmlFor="b-radio-tabs3" className="b-tabs-radio"><MaterialIcon icon="group" size={19} /></label>
            </div>
          </div>
          <div className="b-callhistory">
            {this.state.page === "favorit" ? <Favorit favorit={this.props.data.favorit} filter={this.state.search} /> : null}
            {this.state.page === "history" ? <HistoryCall history={this.props.data.history} filter={this.state.search} /> : null}
            {this.state.page === "contact" ? <Contact contact={this.props.data.contact} filter={this.state.search} /> : null}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default PhoneBook;
