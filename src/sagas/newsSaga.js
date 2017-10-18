import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import {getAllNewsToday} from '../Api/news';

export default function* getNewsToday({}) {
    try {
        console.log("################################");
        const news = yield call(getAllNewsToday);
        yield [
            //put means dispatch an action
            put({ type: types.GET_NEWS_TODAY_SUCCESSS, news }),

        ];
        console.log("Get all is called");
    } catch (error) {
        console.log("Get all is called");
        yield put({ type: 'News', error });
    }
}
