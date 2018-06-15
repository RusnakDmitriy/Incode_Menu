import {LOAD_USERS_PAGINATION} from '../constants';
import {userOrders} from '../dataMenu';

const defUsersOrderList={
    entities: userOrders[0].order,
    page: 1
}

export default (usersOrderList=defUsersOrderList, action)=>{
    const {type, payload}=action;
    switch(type){
        case LOAD_USERS_PAGINATION: return Object.assign({}, {...usersOrderList, page: payload});
    }
    return usersOrderList;
}