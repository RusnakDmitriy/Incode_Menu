import {LOAD_USERS_PAGINATION, LOAD_USER_ORDER_LIST, START, SUCCESS, FAIL} from '../constants';
//import {userOrders} from '../dataMenu';

const defUsersOrderList={
    // entities: userOrders[0].order,
    entities: [],
    page: 1,
    loading: false,
    loaded: false
}

export default (usersOrderList=defUsersOrderList, action)=>{
    const {type, payload}=action;
    switch(type){
        case LOAD_USERS_PAGINATION: return Object.assign({}, {...usersOrderList, page: payload});

        case LOAD_USER_ORDER_LIST+START: return Object.assign({}, {...usersOrderList, loading: true});

        case LOAD_USER_ORDER_LIST+SUCCESS: return Object.assign({}, {...usersOrderList, entities: payload.response[0].order, loading: false, loaded: true});
    }
    return usersOrderList;
}