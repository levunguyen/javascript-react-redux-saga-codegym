import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import {getAllNewsToday} from '../Api/news';

export default function* getNewsToday({}) {
    try {
        console.log("3-> News Saga is called  from getNewsToday action");
        const news = yield call(getAllNewsToday);
        console.log("5-> Saga News dispath a action GET_NEW_TODAY_SUCCESS TO News Reducer");
        yield [
            //put means dispatch an action
            put({ type: types.GET_NEWS_TODAY_SUCCESSS, news }),

        ];

    } catch (error) {
        console.log("Get all is called");
        yield put({ type: 'News', error });
    }
}
