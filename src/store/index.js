import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import logger from '../middlewares/logger';
import thunk from 'redux-thunk';

const enhancer=applyMiddleware(thunk,logger);

const store=createStore(reducer,{},enhancer);

export default store