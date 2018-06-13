import React, { Component } from 'react';
import MainMenu from './MainMenu';

class StatisticPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="mainScreen">
                <MainMenu />
                <div>Statistic Page</div>
            </div>
        )
    }
}

export default StatisticPage;
