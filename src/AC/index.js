import {MENU_CHOICE, GET_OWN_BALANCE, GET_MENU_FOR_ADMIN, LOAD_AVAILABLE, LOAD_USER_ORDER_LIST, LOAD_USERS_PAGINATION, REGISTRATION, START, SUCCESS, FAIL, AUTHENTICATION, ENTER, ADMIN_MENU_SELECT, GET_USERS_LIST, CHANGE_USER_BALANCE, CHECKOUT, CANCEL_CHECKOUT} from '../constants';
import { push } from 'react-router-redux';
import axios from 'axios';


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

export function adminSelectMenu(id, index, number, selected){
    return {
        type: ADMIN_MENU_SELECT,
        payload: {id, index, number, selected}
    }
}

export function getUsersFromStore(){
    return (dispatch)=>{
        dispatch({
            type: GET_USERS_LIST+START
        });

        fetch('http://localhost:3017/api/usersBalance')
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response=>dispatch({
                type: GET_USERS_LIST+SUCCESS,
                payload: {response}
            }))
            .catch(error=>dispatch({
                type: GET_USERS_LIST+FAIL,
                payload: {error}
            }))
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

export function loadUsersOrderList(page){
    return{
        type: LOAD_USERS_PAGINATION,
        payload: page
    }
}

export function getAvailableMenu(){
    return (dispatch)=>{
        dispatch({
            type: LOAD_AVAILABLE+START
        });

        fetch(`http://localhost:3017/api`)
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response=>dispatch({
                type: LOAD_AVAILABLE+SUCCESS,
                payload: {response}
            }))
            .catch(error=>{
                dispatch({
                    type: LOAD_AVAILABLE+FAIL,
                    payload: {error}
                })
            })
    }
};

export function getUserOrderList(userData){
    return (dispatch)=>{
        dispatch({
            type: LOAD_USER_ORDER_LIST+START,
            payload: userData
        });

        fetch(`http://localhost:3017/api/userOrderList/${userData}`)
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response=>dispatch({
                type: LOAD_USER_ORDER_LIST+SUCCESS,
                payload: {userData, response}
            }))
            .catch(error=>dispatch({
                type: LOAD_USER_ORDER_LIST+FAIL,
                payload: {userData, error}
            }))
    }
};

export function getMenuForAdmin(){
    return (dispatch)=>{
        dispatch({
            type: GET_MENU_FOR_ADMIN+START
        });

        fetch('http://localhost:3017/api/adminSelectMenu')
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response=>dispatch({
                type: GET_MENU_FOR_ADMIN+SUCCESS,
                payload: response
            }))
            .catch(error=>dispatch({
                type: GET_MENU_FOR_ADMIN+FAIL,
                payload: error
            }))
    }
};

export function sendUserOrder(item){
    return (dispatch)=>{
        axios.post('http://localhost:3017/api/usersOrder', item)
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
            })
            .catch(error=>console.log(error))
    }
}

export function sendUserBalanceChange(dbID, email, value){
    return (dispatch)=>{
        const body={
            "email": email,
            "balance": value
        }
        axios.put(`http://localhost:3017/api/usersBalance/change/${dbID}`, body)
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
            })
            .catch(error=>console.log(error))
    }
}

export function getOwnBalance(email){
    return (dispatch)=>{
        axios.get(`http://localhost:3017/api/usersBalance/${email}`)
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
                return res.data[0].data.balance
            })
            .then(response=>dispatch({
                type: GET_OWN_BALANCE,
                payload: response
            }))
            .catch(error=>console.log(error))
    }
}

export function sendAdminMenu(id, body){
    return (dispatch)=>{
        axios.put(`http://localhost:3017/api/menu/${id}`, body)
            .then(res=>{
                if(res.status>=400){
                    throw new Error(res.statusText)
                }
                return res
            })
            .then(response=>dispatch({
                type: CANCEL_CHECKOUT
            }))
            .catch(error=>console.log(error))
    }
}
