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
                    <span className="menuItem"><NavLink exact activeStyle={{color:'blue'}} to='/'>Home</NavLink></span>
                    <span className="menuItem"><NavLink activeStyle={{color:'blue'}} to='/statistic'>Statistics</NavLink></span>
                    <span className="menuItem"><NavLink activeStyle={{color:'blue'}} to='/admin'>Admin</NavLink></span>
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