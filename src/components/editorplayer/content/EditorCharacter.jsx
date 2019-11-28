import React from 'react';
import Face from './PageEditor/Face';
import FaceSecond from './PageEditor/FaceSecond';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import FaceLast from './PageEditor/FaceLast';

class EditorCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '/editor/face-last',
      input_editor_face: [
        { name: 'Высота бровей', value: 0 },
        { name: 'Глубина бровей', value: 0 },
        { name: 'Высота скул', value: 0 },
        { name: 'Ширина скул', value: 0 },
        { name: 'Глубина щеки', value: 0 },
        { name: 'Ширина челюсти', value: 0 },
        { name: 'Высота подбородка', value: 0 },
        { name: 'Глубина подбородка', value: 0 },
        { name: 'Ширина подбородка', value: 0 },
        { name: 'Подбородочный отступ', value: 0 },
        { name: 'Обхват шеи', value: 0 },
      ],
      input_editor_nose: [
        { name: 'Ширина носа', value: 0 },
        { name: 'Высота носа',value: 0 },
        { name: 'Длина кончика носа', value: 0 },
        { name: 'Высота кончика носа',value: 0 },
        { name: 'Глубина моста носа', value: 0 },
        { name: 'Поломаность носа',value: 0 },
      ],
      
      input_editor_eyes_lips: [
        { name: 'Высота глаз', value: 0 },
        { name: 'Толщина губ',value: 0 },
        
      ],
      input_editor_face_last: [
        {
          title: "Волосы",
          maxVal: 10,
          index_help: 0,
        },
        {
          title: "Цвет волос",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Брови",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Цвет бровей",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Цвет глаз",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Веснушки",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Цвет веснушек",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Борода",
          maxVal: 10,
          index_help: 0
        },
        {
          title: "Цвет бороды",
          maxVal: 10,
          index_help: 0
        }
      ]
    }
  }

  reset(i) {
    switch (i) {
      case 1:
        for (i = 0; i < this.state.input_editor_face.length; i++) {
          this.setState({ ...this.state.input_editor_face[i].value = 0 })
        }
        break;
      case 2:
        for (i = 0; i < this.state.input_editor_nose.length; i++) {
          this.setState({ ...this.state.input_editor_nose[i].value = 0 })
        }
        for (i = 0; i < this.state.input_editor_eyes_lips.length; i++) {
          this.setState({ ...this.state.input_editor_eyes_lips[i].value = 0 })
        }
        break;
      case 3:
        for (i = 0; i < this.state.input_editor_face_last.length; i++) {
          this.setState({ ...this.state.input_editor_face_last[i].index_help = 0 })
        }
        break;
      default: break;
    }
  }
  clickLeftArrow(index) {
    let currentIndex = this.state.input_editor_face_last[index].index_help;
    if (currentIndex <= 0) {
      currentIndex = this.state.input_editor_face_last[index].maxVal;
    } else {
      currentIndex--;
    }
    this.setState(prev => ({ ...prev.input_editor_face_last[index].index_help = currentIndex }));
  }
  clickRightArrow(index) {
    let currentIndex = this.state.input_editor_face_last[index].index_help;
    if (currentIndex >= this.state.input_editor_face_last[index].maxVal) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    this.setState(prev => ({ ...prev.input_editor_face_last[index].index_help = currentIndex }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="editor-main">
          <div className="title-block">Редактор</div>
          
          
            <Switch>
              <Route path="/editor/editor-character/face-first">
                <Face
                  input_editor_face={this.state.input_editor_face}
                  reset={this.reset.bind(this)}
                />
              </Route>
              <Route path="/editor/editor-character/face-second">
                <FaceSecond
                input_editor_nose={this.state.input_editor_nose}
                input_editor_eyes_lips={this.state.input_editor_eyes_lips}
                reset={this.reset.bind(this)}
                />
              </Route>
              <Route path="/editor/editor-character/face-last">
                <FaceLast
                input_editor_face_last={this.state.input_editor_face_last}
                clickLeftArrow={this.clickLeftArrow.bind(this)}
                clickRightArrow={this.clickRightArrow.bind(this)}
                reset={this.reset.bind(this)}
                />
              </Route>
            </Switch>
            
           
          
        </div>
      </React.Fragment>
    )
  }
}
export default EditorCharacter;
