import React, { Component } from 'react';
import ListOfItems from './ListOfItems';
import {menu} from '../dataMenu';
import {connect} from "react-redux";
import {getMenuItem} from '../AC';
import MainMenu from './MainMenu';


class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            active:null
        }
    }

    handleChoiceMenu=(id)=>{
        this.setState({active: id});
        this.props.getMenuItem(id, 'Rusnak Dmitriy')
    }

    render() {
        const getList = menu.map((item)=>{
            return <li key={item.id} className="listItem" onClick={()=>this.handleChoiceMenu(item.id)}>
                        <ListOfItems isActive={item.id===this.state.active}  item={item.list} />
                        <div className="menuNumber">{item.id}</div>
                    </li>
        })


        return (
            <div className="listScreen">
                <MainMenu />
                <ul className="listOfItems clearfix">
                    {getList}
                </ul>
            </div>
        );
    }
}

export default connect(null, {getMenuItem})(HomePage);

