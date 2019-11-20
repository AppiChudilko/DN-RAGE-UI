import React from 'react';
import './css/base.css'
import './css/adaptive.css'
import './fonts/style.css'
import AuthMain from './components/authorization/AuthMain';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <AuthMain />
      </div>
    </React.Fragment>
  );
}

export default App;
