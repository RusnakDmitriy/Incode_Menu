import React, { Component } from 'react';
import ListOfItems from './ListOfItems';
//import {menu} from '../dataMenu';
import {connect} from "react-redux";
import {getMenuItem} from '../AC';
import {getAvailableMenu, sendUserOrder} from '../AC';
import MainMenu from './MainMenu';


class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            active:null
        }
    }

    componentDidMount(){
        this.props.getAvailableMenu();
    }

    handleChoiceMenu=(id)=>{
        this.setState({active: id});
        this.props.getMenuItem(id, 'Rusnak Dmitriy')
    }

    userChoiceMenu=(item)=>{
        let sortedItem={};
        for(let key in item){
            if(key=='id'){
                sortedItem[key]=item[key]
            } else if(key=='list'){
                sortedItem[key]=item[key].map((elem)=>{
                    let sortObj={};
                    for(let i in elem){
                        if(i!=='_id') sortObj[i]=elem[i]
                    }
                    return sortObj;
                })
            }
        };
        this.props.sendUserOrder(sortedItem);
    }

    render() {
        const {menu, loading, loaded} = this.props;
        const menuAv = [];
        if(loaded && menu[0]) Object.keys(menu[0]).forEach(key=>{
            if(+key || +key==0) menuAv.push(menu[0][key])
        });

        if(loading) return (<div>Loading...</div>);
        const getList = (loaded) ? (menuAv.map((item)=>{
            return <li key={item.id} className="listItem" onClick={()=>this.handleChoiceMenu(item.id)} onDoubleClick={()=>this.userChoiceMenu(item)}>
                        <ListOfItems isActive={item.id===this.state.active}  item={item.list} />
                        <div className="menuNumber">{item.id}</div>
                    </li>
        })) : (<div></div>);


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

const mapStateToProps = (state) => {
    return {
        menu: state.getAvailableMenu.entities,
        loading: state.getAvailableMenu.loading,
        loaded: state.getAvailableMenu.loaded,
        menuID: state.getAvailableMenu._id
    }
}

export default connect(mapStateToProps, {getMenuItem, getAvailableMenu, sendUserOrder})(HomePage);

