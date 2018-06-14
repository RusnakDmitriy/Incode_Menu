import React, { Component } from 'react';
import {connect} from "react-redux";
import FormSelect from './FormSelect';
import {adminSelectMenu} from '../AC';
import adminSelectedMenu from "../reducers/adminSelectedMenu";


class ItemMenuAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            select:undefined,
            img: this.props.text.dish[0].src
        }
    }

    handleChangeSelect=(value, index)=>{
        const {id, adminSelectMenu}=this.props;
        //console.log(value, index);
        this.setState({select: value, img: this.props.text.dish[index].src});
        //console.log(this.state.select);
        adminSelectMenu(id, index, {select: value, img: this.props.text.dish[index].src});
    }

    render() {
        const {text, isActive}=this.props;
        console.log(this.props.adminMenu);   //Use only for show Immutable store
        return (
            <div className="listOfDishes">
                <span><img src={this.state.img} alt="img" /></span>
                <span><FormSelect isActive={isActive} selected={this.state} onChangeSelect={this.handleChangeSelect} text={text.dish} /></span>
            </div>
        );
    }
}

//export default connect(null, {adminSelectMenu})(ItemMenuAdmin);
export default connect((state, ownProps)=>({
    adminMenu: state.adminSelectedMenu.entities.get(ownProps.id)        //Use only for show Immutable store
}), {adminSelectMenu})(ItemMenuAdmin);