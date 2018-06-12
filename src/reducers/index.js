import {combineReducers} from 'redux';
import menu from './menu';
import registration from './registration';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    menu,
    registration,
    router: routerReducer
});