import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeUserBalance} from '../AC';

class InputChangeBalance extends Component {
    constructor(props){
        super(props);
        this.state={
            balance: ''
        };
    }

    handleChangeBalance=(ev)=>{
        const {id}=this.props;
        this.setState({balance: ev.target.value});
        this.props.changeUserBalance(id, ev.target.value);
    }

    render() {
        return (
            <div className="usersListChangeBalance">
                <input type="type" value={this.state.balance} onChange={this.handleChangeBalance} />
            </div>
        );
    }
}

export default connect(null, {changeUserBalance})(InputChangeBalance);