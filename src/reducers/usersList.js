import {GET_USERS_LIST, CHANGE_USER_BALANCE, START, SUCCESS, FAIL, GET_OWN_BALANCE} from '../constants';

const defUserList={
    entities: [],
    loading: false,
    loaded: false,
    ownBalance: undefined
}

export default (usersList=defUserList, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_USERS_LIST+START: return {...usersList, loading: true};

        case GET_USERS_LIST+SUCCESS: return {...usersList, entities: payload.response, loading: false, loaded: true};

        case CHANGE_USER_BALANCE: return {...usersList,
                                            entities: [...usersList.entities.slice(0, (payload.id-1)),
                                                        {...usersList.entities[payload.id-1],
                                                            data:{...usersList.entities[payload.id-1].data, balance:payload.balance}},
                                                    ...usersList.entities.slice(payload.id)]};

        case GET_OWN_BALANCE: return {...usersList, ownBalance: payload}
    }
    return usersList;
}