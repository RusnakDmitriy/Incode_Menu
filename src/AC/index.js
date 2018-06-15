import {MENU_CHOICE, REGISTRATION, SUCCESS, FAIL, AUTHENTICATION, ENTER, ADMIN_MENU_SELECT, GET_USERS_LIST, CHANGE_USER_BALANCE, CHECKOUT, CANCEL_CHECKOUT} from '../constants';
import { push } from 'react-router-redux';

export function getMenuItem(item, user){
    return {
        type: MENU_CHOICE,
        payload: {item, user}
    }
}

 export function signup(userData){
    return {
         type: REGISTRATION,
         payload: {userData},
         statusID: true
     }
}

export function verify(data){
    return (dispatch)=>{
        dispatch({
            type: AUTHENTICATION,
            payload: {data}
        })

        const requestOptions = {
            method:'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `email=${localStorage.getItem('incodeMenuEmail')}&password=${localStorage.getItem('incodeMenuPass')}&authToken=${localStorage.getItem('incodeMenu')}`
        };

        fetch('http://localhost:3000', requestOptions)
            //.then(res=>res.json())
            .then(response=> {
                dispatch(push('/'));
                dispatch({
                    type: ENTER + SUCCESS,
                    payload: {data},
                    enter: true
                })

            })
            .catch(error=>dispatch({
                type: ENTER+FAIL,
                payload: {data,error},
                enter: true
            }))

    }
}

export function adminSelectMenu(id, index, selected){
    return {
        type: ADMIN_MENU_SELECT,
        payload: {id, index, selected}
    }
}

export function getUsersFromStore(usersList){
    return {
        type: GET_USERS_LIST,
        payload: {usersList}
    }
}

export function changeUserBalance(id, balance){
    return {
        type: CHANGE_USER_BALANCE,
        payload: {id, balance}
    }
}

export function checkout(){
    return {
        type: CHECKOUT
    }
}

export function cancelCheckout(){
    return {
        type: CANCEL_CHECKOUT
    }
}