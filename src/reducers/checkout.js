import {CANCEL_CHECKOUT, CHECKOUT} from '../constants';

const defReg={
    checkout: false
}

export default (checkout=defReg, action)=>{
    const {type}=action;

    switch(type){
        case CHECKOUT: return {checkout: true};
        case CANCEL_CHECKOUT: return {checkout: false};
    }
    return checkout;
}