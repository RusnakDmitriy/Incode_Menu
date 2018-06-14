import React, { Component } from 'react';
import MainMenu from './MainMenu';
import ListOfItemsForAdmin from './ListOfItemsForAdmin';
import {menuAdmin} from '../dataMenu';

class MainAdminPage extends Component {
    constructor(props){
        super(props);
        this.state={
            block: false
        }
    }

    handleBlock=()=>{
        this.setState({block: !this.state.block})
    }

    render(){
        const {block}=this.state;
        const getList = menuAdmin.map((item)=>{
            return <li key={item.id} className="listItem">
                        <ListOfItemsForAdmin isActive={block} items={item.list} id={item.id}/>
                        <div className="menuNumber">{item.id}</div>
                    </li>
        });

        return (
            <div className="mainScreen">
                <MainMenu />
                <button onClick={this.handleBlock}>{block ? "Блок вкл." : "Блок выкл."}</button>
                <ul className="listOfItems clearfix">
                    {getList}
                </ul>
            </div>
        )
    }
}

export default MainAdminPage;

