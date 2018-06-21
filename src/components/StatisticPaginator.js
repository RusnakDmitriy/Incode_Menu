import React, { Component } from 'react';
import {connect} from "react-redux";
import {NavLink} from  'react-router-dom';
import {loadUsersOrderList, getUserOrderList} from '../AC';
import {paginationUsersOrderSelector} from '../selectors';
import UsersOrdersListItem from './UsersOrdersListItem';

class StatisticPaginator extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {loadUsersOrderList, getUserOrderList, page} = this.props;
        getUserOrderList(localStorage.getItem('incodeMenuEmail'));
        loadUsersOrderList(page)
    }

    getUsersOrdersList(){
        const {usersOrderList}=this.props;
        console.log(usersOrderList[0]);
        const ordersList = usersOrderList.map((item, i) => {console.log(item); return <li className="statisticTableLine" key={i}>
                                                                            <span className="statisticTableColumnData">{item.date}</span>
                                                                            <span className="statisticTableColumnNumb">{item.menuNumber}</span>
                                                                            <span className="statisticTableColumnDish"><UsersOrdersListItem dishes={item.dishes} /></span>
                                                                        </li>});
        return <ul>{ordersList}</ul>
    }

    getpaginationPages(){
        // const {totalLength}=this.props;
        const {usersOrderList}=this.props;
        const totalLength = (usersOrderList) ? 0 : usersOrderList.order.length;
        const commentsPageAmount = Math.ceil(totalLength/5);
        const paginationPages = [...Array(commentsPageAmount)].map((numb,index) => {return <span key={index}><NavLink activeStyle={{color:'red'}} to={`/statistic/${index+1}`}>{index+1}</NavLink></span>});
        return <div className="paginationPages">Page: {paginationPages}</div>
    }

    render(){
        return (
            <div className="statisticTable">
                <div>
                    <span className="statisticTableColumnData">Дата</span>
                    <span className="statisticTableColumnNumb">Номер меню</span>
                    <span className="statisticTableColumnDish">Блюда</span>
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
        //totalLength: state.usersOrderList.entities.length
    }
}

export default connect(mapStateToProps, {loadUsersOrderList, getUserOrderList})(StatisticPaginator)