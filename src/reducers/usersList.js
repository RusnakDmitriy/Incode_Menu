import {GET_USERS_LIST, CHANGE_USER_BALANCE} from '../constants';
import {OrderedList, OrderedMap, Record} from 'immutable';

// const ReducerState=Record({
//     entities: new OrderedMap([])
// });
//
const defUserList={
    entities: []
}

export default (usersList=defUserList, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_USERS_LIST: return {entities: payload.usersList};

        case CHANGE_USER_BALANCE: return {...usersList};

        // case GET_USERS_LIST: return usersList.set('entities', payload.usersList);
        //
        // case CHANGE_USER_BALANCE: return usersList.updateIn(['entities', payload.id, 'data', 'balance'], payload.usersList);
    }
    return usersList;
}