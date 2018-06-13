import {REGISTRATION} from '../constants';

const defReg={
    email: undefined,
    password: undefined,
    authToken: undefined
}

export default (registration=defReg, action)=>{
    const {type, payload, randomID}=action;

    switch(type){
        //case REGISTRATION: return {email: payload.userData.email, password: payload.userData.password, authToken: randomID}
        case REGISTRATION: return {email: localStorage.getItem('incodeMenuEmail'), password: localStorage.getItem('incodeMenuPass'), authToken: localStorage.getItem('incodeMenu')}
    }
    return registration;
}