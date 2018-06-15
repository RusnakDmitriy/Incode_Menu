import {combineReducers} from 'redux';
import menu from './menu';
import registration from './registration';
import authentification from './authentification';
import enter from './enter';
import adminSelectedMenu from './adminSelectedMenu';
import usersList from './usersList';
import checkout from './checkout';
import usersOrderList from './usersOrderList';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    menu,
    registration,
    authentification,
    enter,
    adminSelectedMenu,
    usersList,
    usersOrderList,
    checkout,
    router: routerReducer
});