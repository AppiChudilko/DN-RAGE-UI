import React from 'react';
import { Link } from "react-router-dom";
import SliderEditor from './PageEditor/Elements/SliderEditor';

class NameCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <React.Fragment>
        <div className="menu-editor-default def-style">
          <div className="title-block">Данные</div>
          <span className="title-in-block">Введите свои данные</span>
          <div className="create-info-input">
            <input type="text" placeholder="Имя" name="firstname-create" className="auth-input-style" value={this.props.first_name} onChange={this.props.valueFirstName.bind(this)} />
            <input type="text" placeholder="Фамилия" name="lastname-create" className="auth-input-style" value={this.props.last_name} onChange={this.props.valueLastName.bind(this)} />
            <input type="text" placeholder="Возраст" pattern="[0-9]*" onInput={this.props.onCheckNumber.bind(this)} value={this.props.old_input} name="old-create" className="auth-input-style" />
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
            <div className="box-last-btn">Проверить</div>
            <div className="box-last-btn" onClick={this.props.reset.bind(this)}>Сброс</div>
          </div>
          <Link to="/editor/family-character">
            <div className="next-button-menu">
              <div className="box-next-btn">Далее</div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
export default NameCharacter;
