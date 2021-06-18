import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logoH.png';
import playground from './assets/PLAYIsland4.png';
import './styles.css';


function App() {
  const [state, setState] = useState('WALLET') // original state, initallize the state.

  const handleClick = () => {
    console.log('Thanks for checking the console!') // this text will show up in console.log 
    setState('Check the console.log!') // change the state 
  }

  return (
    <div>

    <div className="container">

      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/home">
          <img src={logo} className="App-logo" width="40" alt="logo"/>
        </a>

        <button className="btn" onClick={handleClick}>{state}</button> 
        {/* onClick: call the function name, "handleClick" */}
        {/* {state}: the state we declared, when we set the setState, it will change the orginal state.  */}
      </nav>

      <div className="body-wrap">
        <div className="title">
          <h1>Stay Wavy</h1>
          <h1>My Friend</h1>
        </div>
      <div className="highstreet-logo"></div>
        <div className="row">
          <div className="col-md-4 col-sm-12 align-self-start">
          </div>
          <div className="col-md-8 col-sm-12 align-self-end">
            <div className="playground-wrap">
              <img src={playground} className="box playground img-fluid" width="" alt="playground"/>
            </div>
          </div>
        </div>
        
      </div>

      <footer className="navbar navbar-light">
        <a className="navbar-text" href="/home">
          StreetSmart
        </a>
        <a className="navbar-text" href="/home">
          ENTERMARKET
        </a>
      </footer>

    </div>

    </div>

  )
}

export default App;
