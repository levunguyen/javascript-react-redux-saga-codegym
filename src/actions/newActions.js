import * as types from '../constants/actionTypes';

export const getNewsToday = () =>{
    type : types.GET_NEWS_TODAY
}


export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});