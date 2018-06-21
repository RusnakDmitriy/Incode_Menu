import {GET_MENU_FOR_ADMIN, START, SUCCESS, FAIL, LOAD_AVAILABLE} from '../constants';

const defaultState={
    entities: [],
    loading: false,
    loaded: false
};

export default (menuForAdmin=defaultState, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_MENU_FOR_ADMIN+START: return {...menuForAdmin, loading: true}

        case GET_MENU_FOR_ADMIN+SUCCESS: return{...menuForAdmin, entities: payload, loading: false, loaded: true}
    }
    return menuForAdmin;
}