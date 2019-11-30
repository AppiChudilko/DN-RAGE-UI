import React from 'react';
import './css/editorplayer.css'
import './css/editor-adaptive.css'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EditorPlayer from './EditorPlayer';
import ChoiceRole from './content/ChoiceRole';
import EventManager from "../../EventManager";

class EditorMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      path: '/editor/name-character'
    }
  }

  componentDidMount() {
    EventManager.addHandler('customization', value => { // Скрыть/Показать кастомку, переходы по страницам
      if (value.type === 'show') { this.setState({ show: true }) }
      else if (value.type === 'hide') { this.setState({ show: false }) }
      else if (value.type === 'switch') { this.setState({ show: !this.state.show }) }
      else if (value.type === 'choicerole') { this.setState({ path: "/choicerole" }) }
      else return;
    })
  }

  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <React.Fragment >
        
        <Router>
          <Route path="/editor">
            <EditorPlayer />
          </Route>
          <Route path="/choicerole">
            <ChoiceRole />
          </Route>
          <Redirect to={this.state.path} push />
        </Router>
        
      </React.Fragment>
    )
  }
}
export default EditorMain;
