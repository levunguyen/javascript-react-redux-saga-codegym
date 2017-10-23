import * as types from '../constants/actionTypes';
import initialState from './initialState';

// Handles image related actions
export default function (state = initialState.images, action = null) {
    switch (action.type) {
        case types.GET_NEWS_TODAY_SUCCESSS:
            console.log("6-> News Reducer get result from news saga dispacher", action.news);
            return [...state, action.news];

        default:
            return state;
    }
}