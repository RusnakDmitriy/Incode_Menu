import React, { Component } from 'react';
import {connect} from "react-redux";
import FormSelect from './FormSelect';
import {adminSelectMenu} from '../AC';

class ItemMenuAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            src: this.props.text.dish[0].src,
            text:undefined
        }
    }

    handleChangeSelect=(value, index)=>{
        const {id, number, adminSelectMenu}=this.props;
        //console.log(value, number, index);
        this.setState({text: value, src: this.props.text.dish[index].src});
        //console.log(this.state.select);
        adminSelectMenu(id, index, number, {src: this.props.text.dish[index].src, text: value});
    }

    render() {
        const {text, isActive}=this.props;
        //console.log(this.props.adminMenu);   //Use only for show Immutable store
        return (
            <div className="listOfDishes">
                <span><img src={this.state.src} alt="img" /></span>
                <span><FormSelect isActive={isActive} selected={this.state} onChangeSelect={this.handleChangeSelect} text={text.dish} /></span>
            </div>
        );
    }
}

//export default connect(null, {adminSelectMenu})(ItemMenuAdmin);
export default connect((state, ownProps)=>({
    //adminMenu: state.adminSelectedMenu.entities.get(ownProps.id)        //Use only for show Immutable store
}), {adminSelectMenu})(ItemMenuAdmin);