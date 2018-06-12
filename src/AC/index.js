import {MENU_CHOICE} from '../constants';

export function getMenuItem(item, user){
    return {
        type: MENU_CHOICE,
        payload: {item, user}
    }
}