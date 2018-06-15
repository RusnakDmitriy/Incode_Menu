import React, { Component } from 'react';
import MainMenu from './MainMenu';
import StatisticPaginator from './StatisticPaginator';
import {Route, Redirect} from  'react-router-dom';

function StatisticPage({match}){
    if(match.isExact) return <Redirect to='/statistic/1' />
    return (

    <Route path='/statistic/:page' render={getStatisticPaginator} />
    )
}

function getStatisticPaginator({match}){
    return (
        <div className="mainScreenStatistic">
            <MainMenu />
            <StatisticPaginator key={match.params.page} page={match.params.page} />
        </div>
    )
}

export default StatisticPage;
