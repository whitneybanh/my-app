import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logoH.png';
import playground from './assets/PLAYIsland4.png';
import './styles.css';


function App() {
  const [state, setState] = useState('WALLET') // original state, initallize the state.

  const handleClick = () => {
    console.log('You clicked here') // test does the btn is works?
    setState(':D') // change the state 
  }

  return (
    <div>

    <div className="container">

      <nav class="navbar navbar-light">

        <a class="navbar-brand" href="{React}">
          <img src={logo} className="App-logo" width="40" alt="logo"/>
        </a>

        <button class="btn" onClick={handleClick}>{state}</button> 
        {/* onClick: call the function named "handleClick" */}
        {/* {state}: the state we declared, when we set the setState, it will change the orginal state.  */}

      </nav>

      <div className="body-wrap">
        <div className="title">
          <h1>Stay Wavy</h1>
          <h1>My Friend</h1>
        </div>
      <div className="highstreet-logo"></div>
        <div class="row">
          <div class="col-md-4 col-sm-12 align-self-start">
          </div>
          <div class="col-md-8 col-sm-12 align-self-end">
            <div class="playground-wrap">
              <img src={playground} className="box playground img-fluid" width="" alt="playground"/>
            </div>
          </div>
        </div>
        
      </div>

      <footer class="navbar navbar-light">
        <a class="navbar-text" href="{React}">
          StreetSmart
        </a>
        <a class="navbar-text" href="{React}">
          ENTERMARKET
        </a>
      </footer>

    </div>

    </div>

  )
}

export default App;
