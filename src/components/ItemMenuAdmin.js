import React, { Component } from 'react';
import FormSelect from './FormSelect';

class ItemMenuAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            select:'',
            img: this.props.text.dish[0].src
        }
    }

    handleChangeSelect=(value, index)=>{
        this.setState({select: value, img: this.props.text.dish[index].src});
    }

    render() {
        const {text}=this.props;
        return (
            <div className="listOfDishes">
                <span><img src={this.state.img} alt="img" /></span>
                <span><FormSelect selected={this.state} onChangeSelect={this.handleChangeSelect} text={text.dish} /></span>
            </div>
        );
    }
}

export default ItemMenuAdmin;