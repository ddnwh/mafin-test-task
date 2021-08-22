import { call, put, takeEvery, all } from "@redux-saga/core/effects";
import {FETCH_DATA, setData} from './actions';
import {FetchDataActionType} from './types';
import {fetchData, initialState} from './utils';

function* fetchDataSaga (action:FetchDataActionType){
    const {page,searchBy} = action;
    try {
        let {data} = yield call(fetchData,page,searchBy);
        yield put(setData(data));
    }
    catch (err) {
        if(err.response.status===404) {
            yield put(setData(initialState));
        } else {
            alert('Data fetching error');
        }
    }
}

function* watchFetchDataSaga (){
    yield takeEvery(FETCH_DATA,fetchDataSaga)
}

export default function* rootSaga (){
    yield all([watchFetchDataSaga()])
}