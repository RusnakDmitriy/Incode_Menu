import {GET_USERS_LIST, CHANGE_USER_BALANCE} from '../constants';
import {OrderedList, OrderedMap, Record} from 'immutable';

// const ReducerState=Record({
//     entities: new OrderedMap({})
// });
//
// const UserRecord=Record({
//     email: undefined,
//     balance: undefined
// });
//
// const defUserList=new ReducerState();

const defUserList={
    entities: []
}

export default (usersList=defUserList, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_USERS_LIST: return {...usersList, entities: payload.usersList};

        case CHANGE_USER_BALANCE: return {...usersList, entities: [...usersList.entities.slice(0, (payload.id-1)), {...usersList.entities[payload.id-1], data:{...usersList.entities[payload.id-1].data, balance:payload.balance}}, ...usersList.entities.slice(payload.id)]};
    }
    return usersList;
}