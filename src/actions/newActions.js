import * as types from '../constants/actionTypes';

export const getNewsToday = () =>{
  console.log("2-> Action getNewsToday in actions/newActions is called then calling the News saga")

  return {
      type : types.GET_NEWS_TODAY
  }
}


export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});