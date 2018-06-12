import {MENU_CHOICE} from '../constants';

const defMenuChoice={
    itemMenu: undefined,
    userName: undefined
}

export default (itemMenu=defMenuChoice, action)=>{
    const {type, payload}=action;
    switch(type){
        case MENU_CHOICE: return {itemMenu: payload.item, userName: payload.user}
    }
    return itemMenu;
}