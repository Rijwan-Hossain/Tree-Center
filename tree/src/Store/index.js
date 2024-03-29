import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers/rootReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(
   applyMiddleware(thunk)
)) 
