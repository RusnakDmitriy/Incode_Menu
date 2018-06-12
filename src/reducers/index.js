import {combineReducers} from 'redux';
import menu from './menu';
import registration from './registration';

export default combineReducers({
    menu,
    registration
});