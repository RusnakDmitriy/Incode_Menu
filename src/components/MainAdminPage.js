import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainMenu from './MainMenu';
import ListOfItemsForAdmin from './ListOfItemsForAdmin';
import ListOfUsersBalance from './ListOfUsersBalance';
import OrderWindow from './OrderWindow';
//import {menuAdmin} from '../dataMenu';
import {checkout, getMenuForAdmin} from '../AC';
import {toJS} from 'immutable';

class MainAdminPage extends Component {
    constructor(props){
        super(props);
        this.state={
            block: false
        }
    }

    componentDidMount(){
        this.props.getMenuForAdmin();
    }

    handleBlock=()=>{
        this.setState({block: !this.state.block});
    }

    handleCheckout=()=>{
        this.props.checkout()
    }

    render(){
        const {block}=this.state;
        const {modal, menuAdmin, loading, loaded}=this.props;
        if(loading) return <div>Loading...</div>;
        const getList = menuAdmin.map((item)=>{
            return <li key={item.id} className="listItem">
                        <ListOfItemsForAdmin isActive={block} items={item.list} id={item.id}/>
                        <div className="menuNumber">{item.id}</div>
                    </li>
        });
        console.log(this.props.admin.toJS());
        return (
            <div className="mainAdminScreen">
                {modal.checkout ? (<div className="notActive"></div>) : (<div></div>)}
                <MainMenu />
                <div className="blockButton"><button onClick={this.handleBlock}>{block ? "Блок вкл." : "Блок выкл."}</button></div>
                <div className="selectedMenu">
                    <ul className="listOfAdmitItems clearfix">
                        {getList}
                    </ul>
                </div>
                <ListOfUsersBalance />
                <button disabled={modal.checkout} onClick={this.handleCheckout}>Оформить заказ</button>
                {modal.checkout ? (<OrderWindow />) : (<div></div>)}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        modal: state.checkout,
        admin: state.adminSelectedMenu.entities,
        menuAdmin: state.menuForAdmin.entities,
        loading: state.menuForAdmin.loading,
        loaded: state.menuForAdmin.loaded
    }
}

export default connect(mapStateToProps, {checkout, getMenuForAdmin})(MainAdminPage);

