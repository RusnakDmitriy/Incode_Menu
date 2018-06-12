import {MENU_CHOICE} from '../constants';
import {REGISTRATION} from '../constants';

export function getMenuItem(item, user){
    return {
        type: MENU_CHOICE,
        payload: {item, user}
    }
}

export function signup(userData){
    return {
        type: REGISTRATION,
        payload: {userData}
    }
}