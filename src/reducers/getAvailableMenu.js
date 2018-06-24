import {LOAD_AVAILABLE, START, SUCCESS, FAIL} from '../constants';

const defAvailableMenu={
    entities: [],
    loading: false,
    loaded: false,
    _id: undefined
}

export default (getAvailableMenu=defAvailableMenu, action)=>{
    const {type, payload}=action;

    switch(type){
        case LOAD_AVAILABLE+START: return {...getAvailableMenu, loading: true}

        case LOAD_AVAILABLE+SUCCESS: return{...getAvailableMenu, entities: payload.response, _id: payload.response[0]._id, loading: false, loaded: true}
    }
    return getAvailableMenu;
}