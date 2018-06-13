import {AUTHENTICATION} from '../constants';

const defReg={
    email: localStorage.getItem('incodeMenuEmail'),
    password: localStorage.getItem('incodeMenuPass'),
    authToken: localStorage.getItem('incodeMenu')
}

export default (authentification=defReg, action)=>{
    const {type, payload}=action;

    switch(type){
        case AUTHENTICATION: return {email: localStorage.getItem('incodeMenuEmail'), password: localStorage.getItem('incodeMenuPass'), authToken: localStorage.getItem('incodeMenu')}
    }
    return authentification;
}