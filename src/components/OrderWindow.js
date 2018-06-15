import React, {Component} from 'react';
import {connect} from 'react-redux';
import {menuQuantity} from '../dataMenu';
import {cancelCheckout} from '../AC';

class OrderWindow extends Component{
    constructor(props){
        super(props);
    }

    handleSendOrder=()=>{
        this.props.cancelCheckout()
    }

    handleCancelOrder=()=>{
        this.props.cancelCheckout()
    }

    render() {
        const getOrderList = menuQuantity.map((item)=>{
            return <div key={item.id}>Обед №<span>{item.id}</span> - <span>{item.quantity}</span> шт.</div>
        })

        return (
            <div className='modal'>
                {getOrderList}
                <span><button onClick={this.handleSendOrder}>ОК</button></span><span><button onClick={this.handleCancelOrder}>Отмена</button></span>
            </div>
        )
    }
}

export default connect(null, {cancelCheckout})(OrderWindow)