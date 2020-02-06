import React from 'react';

import MaterialIcon, { colorPalette } from 'material-icons-react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class EditContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: ''
    }
  }
  changeName(e, type) {
    console.log(e.target.valueAsNumber)    
    switch (type) {
      case 'firstname':
        this.setState({ first_name: e.target.value })
        break;
      case 'lastname':
        this.setState({ last_name: e.target.value })
        break;
      case 'number':
        this.setState({ phone_number: e.target.value })
        break;
      case 'email':
        this.setState({ email: e.target.value })
        break;      
      default:
        break;
    }
  }
  addNumber() {
    return (
      <React.Fragment>
        <TextField id="standard-basic" label="" placeholder="Номер телефона" className="text_width" onChange={(e) => this.changeName(e, 'number')}/>
      </React.Fragment>
    )
  }
  render() {
    return (
      <React.Fragment >
        <div className="editcontact-box">
          <div className="u-title" style={{ background: "#2A56C6" }}>
            <div className="dedbit-u-texttittle">
              <MaterialIcon icon="arrow_back" size={18} color="#fff" />
              <span className="u-texttittle">Редактирование контакта</span>
            </div>
          </div>
          <div className="editcontact-main">
            <div className="box-img-e">
              <img src="https://a.rsg.sc//n/socialclub" alt="" className="img-profileeditconatact" />
            </div>
            <div className="editcontact-box-e">
              <div className="e-boxeditor">
                <div className="box-im-st">
                  <MaterialIcon icon="person" size={20} color="#7F7F7F" />
                </div>
                <div className="e-clmn-ed">
                  <TextField id="standard-basic" label="" value={this.state.first_name} placeholder="Имя Фамилия" className="text-filed" onChange={(e) => this.changeName(e, 'firstname')} />                  
                </div>
              </div>
              <div className="e-boxeditor">
                <div className="box-im-st">
                  <MaterialIcon icon="phone" size={20} color="#7F7F7F" />
                </div>
                <div className="e-clmn-ed">
                  <div className="row-clm-e">
                    <TextField id="standard-basic" label="" type="number" value={this.state.phone_number} placeholder="Номер телефона" className="text-filed" onChange={(e) => this.changeName(e, 'number')} />
                    <div className="add-posit-btn">
                      <MaterialIcon icon="add_circle" size={20} color="#7F7F7F" onClick={() => this.addNumber()} />
                    </div>
                  </div>
                  {/* {this.addNumber()} */}
                </div>
              </div>
              <div className="e-boxeditor">
                <div className="box-im-st">
                  <MaterialIcon icon="mail" size={20} color="#7F7F7F" />
                </div>
                <div className="e-clmn-ed">
                  <TextField id="standard-basic" label="" value={this.state.email} placeholder="E-Mail" className="text-filed" onChange={(e) => this.changeName(e, 'email')}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default EditContact;