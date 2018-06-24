import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeUserBalance, sendUserBalanceChange} from '../AC';

class InputChangeBalance extends Component {
    constructor(props){
        super(props);
        this.state={
            balance: ''
        };
    }

    handleChangeBalance=(ev)=>{
        const {id, email, dbID, num}=this.props;
        this.setState({balance: ev.target.value});
        this.props.changeUserBalance(num+1, ev.target.value);
        this.props.sendUserBalanceChange(dbID, email, ev.target.value);
    }

    render() {
        return (
            <div className="usersListChangeBalance">
                <input type="type" value={this.state.balance} onChange={this.handleChangeBalance} />
            </div>
        );
    }
}

export default connect(null, {changeUserBalance, sendUserBalanceChange})(InputChangeBalance);