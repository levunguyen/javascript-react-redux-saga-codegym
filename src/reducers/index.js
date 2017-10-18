import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import news from './newsReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    images,
    videos,
    news
});

export default rootReducer;