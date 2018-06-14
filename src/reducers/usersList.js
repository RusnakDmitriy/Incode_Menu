import {GET_USERS_LIST} from '../constants';

const defUserList={
    entities: []
}

export default (usersList=defUserList, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_USERS_LIST: return {entities: payload.usersList}
    }
    return usersList;
}