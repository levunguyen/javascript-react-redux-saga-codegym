import * as types from '../constants/actionTypes';
import initialState from './initialState';

// Handles image related actions
export default function (state = initialState.images, action = null) {
    console.log("After saga to get News BB",action.type);
    switch (action.type) {
        case types.GET_NEWS_TODAY:
            console.log("After saga to get News !!!!!!!!");
            return [...state, action.news];

        default:
            return state;
    }
}