import React, { Component } from 'react';
import MainMenu from './MainMenu';
import ListOfItemsForAdmin from './ListOfItemsForAdmin';
import {menuAdmin} from '../dataMenu';

class MainAdminPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const getList = menuAdmin.map((item)=>{
            return <li key={item.id} className="listItem">
                        <ListOfItemsForAdmin items={item.list} id={item.id}/>
                        <div className="menuNumber">{item.id}</div>
                    </li>
        });

        return (
            <div className="mainScreen">
                <MainMenu />
                <button>Block</button>
                <ul className="listOfItems clearfix">
                    {getList}
                </ul>
            </div>
        )
    }
}

export default MainAdminPage;

