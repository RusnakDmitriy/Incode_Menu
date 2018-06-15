import React, { Component } from 'react';
import MainMenu from './MainMenu';
import StatisticPaginator from './StatisticPaginator';
import {Route, Redirect} from  'react-router-dom';

// class StatisticPage extends Component {
//     constructor(props){
//         super(props)
//     }
//
//     render(){
//         console.log(this.props.match);
//         return (
//             <div className="mainScreen">
//                 <MainMenu />
//                 <div>Statistic Page</div>
//             </div>
//         )
//     }
// }

function StatisticPage({match}){
    if(match.isExact) return <Redirect to='/statistic/1' />
    return (

    <Route path='/statistic/:page' render={getStatisticPaginator} />
    )
}

function getStatisticPaginator({match}){
    return (
        <div className="mainScreen">
            <MainMenu />
            <StatisticPaginator key={match.params.page} page={match.params.page} />
        </div>
    )
}

export default StatisticPage;
