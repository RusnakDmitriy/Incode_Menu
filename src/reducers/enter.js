import {ENTER, SUCCESS, FAIL} from '../constants';

const defReg={
    email: localStorage.getItem('incodeMenuEmail'),
    password: localStorage.getItem('incodeMenuPass'),
    authToken: localStorage.getItem('incodeMenu')
}

export default (enter=defReg, action)=>{
    const {type, payload}=action;

    switch(type){
        case ENTER+SUCCESS: return {email: localStorage.getItem('incodeMenuEmail'), password: localStorage.getItem('incodeMenuPass'), authToken: localStorage.getItem('incodeMenu')}
    }
    return enter;
}