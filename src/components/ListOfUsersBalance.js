import React, { Component } from 'react';
import {connect} from "react-redux";
import {usersList} from '../dataMenu';
import {getUsersFromStore} from '../AC';
import InputChangeBalance from "./InputChangeBalance";

class ListOfUsersBalance extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getUsersFromStore();
    }


    render() {
        const {usersList, loaded, loading}=this.props;
        if(loading) return (<div>Loading...</div>);
        const getUsersList = usersList.map((item, i)=>{
            return <li className="usersListItem" key={item.id}><span>{item.data.email}:   </span><span><InputChangeBalance id={item.id} email={item.data.email} dbID={item._id} num={i} /></span></li>
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
        usersList: state.usersList.entities,
        loaded: state.usersList.loaded,
        loading: state.usersList.loading
    }
}, {getUsersFromStore})(ListOfUsersBalance);