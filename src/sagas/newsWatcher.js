import { takeLatest,takeEvery } from 'redux-saga';
import getNewsToday from './newsSaga';
import * as types from '../constants/actionTypes';

export default function* watchNewsToday() {
    console.log("here");
    yield* takeEvery(types.GET_NEWS_TODAY, getNewsToday);

}