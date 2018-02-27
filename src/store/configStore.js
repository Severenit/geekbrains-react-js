import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

export default function configStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            logger
        )
    );

    return store;
}