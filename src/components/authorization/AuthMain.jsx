import React from 'react';
import './css/auto.css'
import Authorization from './Pages/Authorization';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
// import CreatePlayer from './Pages/CreatePlayer';//проверка

class AuthMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      path: '/'
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.show ?
        <div className="auth-main">
          
            <Router>
            <Route exact path="/" component={Authorization} />
            {/* <Route exact path="/create" component={CreatePlayer} /> */}
            <Redirect to={this.state.path} push />
            </Router>
          
        </div>
        : null
  }
      </React.Fragment>
    )
  }
}
export default AuthMain;
