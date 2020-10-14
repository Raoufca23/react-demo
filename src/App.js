import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/cards'
import { Provider } from 'react-redux'
import Store from './store/configureStore'

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <div className="container">
          <Cards />
        </div>
      </Provider>
    );
  }
}

export default App;