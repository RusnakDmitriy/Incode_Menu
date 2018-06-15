import React, { Component } from 'react';
import {connect} from "react-redux";
import {NavLink} from  'react-router-dom';
import {loadUsersOrderList} from '../AC';
import usersOrderList from "../reducers/usersOrderList";
import {paginationUsersOrderSelector} from '../selectors';

class StatisticPaginator extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {loadUsersOrderList, page} = this.props;
        loadUsersOrderList(page)
    }

    getUsersOrdersList(){
        const {usersOrderList}=this.props;
        const ordersList = usersOrderList.map((item, i) => {return <li key={i}>
                                                                            <span>{item.date}</span>
                                                                            <span>{item.menuNumber}</span>
                                                                            <span>{item.dishes}</span>
                                                                        </li>});
        return <ul>{ordersList}</ul>
    }

    getpaginationPages(){
        const {totalLength}=this.props;
        const commentsPageAmount = Math.ceil(totalLength/5);
        const paginationPages = [...Array(commentsPageAmount)].map((numb,index) => {return <li key={index}><NavLink activeStyle={{color:'red'}} to={`/statistic/${index+1}`}>{index+1}</NavLink></li>});
        return <ul>{paginationPages}</ul>
    }

    render(){
        return (
            <div className="mainScreen">
                <div>
                    <span>Дата</span>
                    <span>Номер меню</span>
                    <span>Блюда</span>
                </div>
                {this.getUsersOrdersList()}
                {this.getpaginationPages()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        usersOrderList: paginationUsersOrderSelector(state),
        totalLength: state.usersOrderList.entities.length
    }
}

export default connect(mapStateToProps, {loadUsersOrderList})(StatisticPaginator)