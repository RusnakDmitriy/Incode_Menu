import React, { Component } from 'react';
import HomePage from './components/HomePage';
import MainMenu from './components/MainMenu';


class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const list=[
            ["Наваристый суп харчо",
                "Картофель отварной молодой",
                "Биток Хмельницкий",
                "Свежий салат из капусты с огурцом"],
            ["Наваристый суп харчо",
                "Картофель отварной молодой",
                "Биток Хмельницкий",
                "Свежий салат из капусты с огурцом"],
            ["Наваристый суп харчо",
                "Картофель отварной молодой",
                "Биток Хмельницкий",
                "Свежий салат из капусты с огурцом"],
            ["Наваристый суп харчо",
                "Картофель отварной молодой",
                "Биток Хмельницкий",
                "Свежий салат из капусты с огурцом"],
        ];
        return (
          <div className="mainScreen">
              <MainMenu />
              <HomePage list={list} />
          </div>
        );
  }
}

export default App;
