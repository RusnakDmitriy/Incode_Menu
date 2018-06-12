import React, { Component } from 'react';
import HomePage from './components/HomePage';
import MainMenu from './components/MainMenu';


class App extends Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
          <div className="mainScreen">
              <MainMenu />
              <HomePage />
          </div>
        );
  }
}

export default App;
