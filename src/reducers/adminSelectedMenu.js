import {ADMIN_MENU_SELECT} from '../constants';
import {OrderedMap, Record} from 'immutable';

const ReducerState=Record({
    entities:new OrderedMap({})
});

const defaultState=new ReducerState();

export default (adminSelectedMenu=defaultState, action)=>{
    const {type, payload}=action;
    switch(type){
        case ADMIN_MENU_SELECT: return adminSelectedMenu.setIn(['entities', payload.id, payload.index], payload.selected)
    }
    return adminSelectedMenu;
}