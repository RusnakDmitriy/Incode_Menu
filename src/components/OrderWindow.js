import React, {Component} from 'react';
import {connect} from 'react-redux';
import {menuQuantity} from '../dataMenu';
import {cancelCheckout, sendAdminMenu} from '../AC';

class OrderWindow extends Component{
    constructor(props){
        super(props);
    }

    handleSendOrder=()=>{
        //this.props.cancelCheckout()
        const {sendMenu, menuID}=this.props;
        this.props.sendAdminMenu(menuID, sendMenu)
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

const mapStateToProps = (state) => {
    return {
        menuID: state.getAvailableMenu._id,
        sendMenu: state.adminSelectedMenu.entities
    }
}

export default connect(mapStateToProps, {cancelCheckout, sendAdminMenu})(OrderWindow)