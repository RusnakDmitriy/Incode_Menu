import {REGISTRATION} from '../constants';

const defReg={
    email: undefined,
    password: undefined
}

export default (registration=defReg, action)=>{
    const {type, payload}=action;
    switch(type){
        case REGISTRATION: return {email: payload.userData.email, password: payload.userData.password}
    }
    return registration;
}