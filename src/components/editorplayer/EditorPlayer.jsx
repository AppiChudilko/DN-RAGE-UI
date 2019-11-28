import React from 'react';
import Camera from './content/Camera';
import './css/editorplayer.css'
import FamilyCharacter from './content/FamilyCharacter';
import EditorCharacter from './content/EditorCharacter';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import EventManager from "../../EventManager";
// import NameCharacter from './content/NameCharacter';

class EditorPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      path:'/editor/family-character'
    }
  }

  componentDidMount() {
    EventManager.addHandler('playerEditor', value => {
      if (value.type === 'show') { this.setState({ show: true }) }
      else if (value.type === 'hide') { this.setState({ show: false }) }
      else if (value.type === 'switch') { this.setState({ show: !this.state.show }) }
      else return;
    })
  }

  render() {
    return (
      <React.Fragment>
         <div className="editor-box">
           
           <Camera />
           <Router>
           {/* <Route path="/editor/name-character">
           <NameCharacter />
           </Route> */}
           <Route path="/editor/family-character">
           <FamilyCharacter />
           </Route>
           
           <Route path="/editor/editor-character">
           <EditorCharacter />
           </Route> 
           
           <Redirect to={this.state.path} push />
           </Router>
         </div>
      </React.Fragment>
    )
  }
}
export default EditorPlayer;
