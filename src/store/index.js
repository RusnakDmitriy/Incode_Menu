import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import logger from '../middlewares/logger';
import randomID from '../middlewares/randomID';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

const enhancer=applyMiddleware(thunk, randomID, routerMiddleware(history), logger);

const store=createStore(reducer,{},enhancer);

export default store