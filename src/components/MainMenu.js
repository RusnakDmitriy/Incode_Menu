import React, { Component } from 'react';
import {NavLink} from  'react-router-dom';

class MainMenu extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="mainMenu clearfix">
                <div>
                    <span className="menuItem">Home</span>
                    <span className="menuItem">Statistics</span>
                    <span className="menuItem">Admin</span>
                </div>
                <div>
                    <span className="menuItem">Balance: </span>
                    <span className="menuItem">e-mail: someone@somewhere.com</span>
                    <span className="menuItem"><NavLink to="/signin">Signout</NavLink></span>
                </div>
            </div>
        );
    }
}

export default MainMenu;