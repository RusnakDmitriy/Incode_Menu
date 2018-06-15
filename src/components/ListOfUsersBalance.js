import React, { Component } from 'react';
import {connect} from "react-redux";
// import {toJS} from 'immutable';
import {usersList} from '../dataMenu';
import {getUsersFromStore} from '../AC';
import InputChangeBalance from "./InputChangeBalance";

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
            return <li key={item.id}><span>{item.data.email}</span><span><InputChangeBalance id={item.id} /></span></li>
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