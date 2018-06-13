import React, { Component } from 'react';
import MainMenu from './MainMenu';

class MainAdminPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="mainScreen">
                <MainMenu />
                <div>Admin Page</div>
            </div>
        )
    }
}

export default MainAdminPage;

