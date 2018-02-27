import { combineReducers } from 'redux';
import news from './news';
import user from './user';

export default combineReducers({
    news,
    user
})