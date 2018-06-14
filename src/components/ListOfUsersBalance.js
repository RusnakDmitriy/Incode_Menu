import React, { Component } from 'react';
import {connect} from "react-redux";
import {usersList} from '../dataMenu';
import {getUsersFromStore} from '../AC';

class ListOfUsersBalance extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getUsersFromStore(usersList);
    }

    render() {
        const {usersList}=this.props;
        const getUsersList = usersList.map((item)=>{
            return <li key={item.id}><span>{item.data.email}</span><span><input type="text" value={item.data.balance} /></span></li>
        });

        return (
            <div className="usersList">
                <ul>
                    {getUsersList}
                </ul>
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        usersList: state.usersList.entities
    }
}, {getUsersFromStore})(ListOfUsersBalance);