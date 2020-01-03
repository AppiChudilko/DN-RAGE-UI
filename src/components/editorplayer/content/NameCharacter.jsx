import React from 'react';
import { Link } from "react-router-dom";
import SliderEditor from './PageEditor/Elements/SliderEditor';

class NameCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  changeAge(val) {
    mp.trigger('client:events:custom:updateAge', // eslint-disable-line
        val);
  }

  registerPlayer() {
    mp.trigger('client:events:custom:register', // eslint-disable-line
        this.props.first_name, this.props.last_name, this.props.old_input, this.props.nationality[this.props.index_help]);
  }

  render() {

    return (
      <React.Fragment>
        <div className="menu-editor-default def-style">
          <div className="title-block">Данные</div>
          <span className="title-in-block">Введите свои данные</span>
          <div className="create-info-input">
            <input type="text" placeholder="Имя" name="firstname-create" pattern="[a-zA-Z]*" className="auth-input-style" value={this.props.first_name} onChange={this.props.valueFirstName.bind(this)} />
            <input type="text" placeholder="Фамилия" name="lastname-create" pattern="[a-zA-Z]*" className="auth-input-style" value={this.props.last_name} onChange={this.props.valueLastName.bind(this)} />
            <input type="text" placeholder="Возраст" min="18" max="60" pattern="[0-9]*" onInput={this.props.onCheckNumber.bind(this)} onChange={this.changeAge(this.props.old_input)} value={this.props.old_input} name="old-create" className="auth-input-style" />
          </div>
          <SliderEditor
            index={0}
            title={this.props.title}
            index_help={this.props.index_help}
            name_array={this.props.nationality}
            clickLeftArrow={this.props.clickLeftArrow.bind(this)}
            clickRightArrow={this.props.clickRightArrow.bind(this)}
          />
          <div className="editor-circl-change def-margin-auto">
            <div className="circle-change circle-blue"></div>
            <div className="circle-change"></div>
            <div className="circle-change"></div>
          </div>
          <div className="last-button-menu">
            <div className="box-last-btn">...</div>
            <div className="box-last-btn" onClick={this.props.reset.bind(this)}>Сброс</div>
          </div>
          {/*<Link to="/editor/family-character">*/}
            <div className="next-button-menu">
              <div className="box-next-btn" onClick={this.registerPlayer()}>Далее</div>
            </div>
          {/*</Link>*/}
        </div>
      </React.Fragment>
    )
  }
}
export default NameCharacter;