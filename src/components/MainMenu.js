import React, { Component } from 'react';
import {NavLink} from  'react-router-dom';
import {connect} from "react-redux";
import {getOwnBalance} from '../AC';

class MainMenu extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getOwnBalance(localStorage.getItem('incodeMenuEmail'));
    }

    render() {
        const {loading, ownBalance}=this.props;
        if(loading) return (<div></div>);
        return (
            <div className="mainMenu clearfix">
                <div>
                    <span className="menuItem"><NavLink exact activeStyle={{color:'blue'}} to='/'>Home</NavLink></span>
                    <span className="menuItem"><NavLink activeStyle={{color:'blue'}} to='/statistic'>Statistics</NavLink></span>
                    <span className="menuItem"><NavLink activeStyle={{color:'blue'}} to='/admin'>Admin</NavLink></span>
                </div>
                <div>
                    <span className="menuItem">Balance: {ownBalance}</span>
                    <span className="menuItem">e-mail: someone@somewhere.com</span>
                    <span className="menuItem"><NavLink to="/signin">Signout</NavLink></span>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        userBalance: state.usersList.entities,
        loading: state.usersList.loading,
        ownBalance: state.usersList.ownBalance
    }
}

export default connect(mapStateToProps, {getOwnBalance})(MainMenu);