import './App.css';
import React, {Fragment} from "react";
import PizzaHut from "./components/Pizahut";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
    <div className="App">
      <Fragment>
        <nav className='navbar-dark navbar bg-dark'>
          <a href='/' className='navbar-brand'>React Redux</a>
        </nav>
          <Provider store={store}>
              <PizzaHut/>
          </Provider>
      </Fragment>
    </div>
  );
}

export default App;
