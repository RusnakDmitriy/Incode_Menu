import {combineReducers} from 'redux';
import menu from './menu';
import registration from './registration';
import authentification from './authentification';
import enter from './enter';
import adminSelectedMenu from './adminSelectedMenu';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    menu,
    registration,
    authentification,
    enter,
    adminSelectedMenu,
    router: routerReducer
});