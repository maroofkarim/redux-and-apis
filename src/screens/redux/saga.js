import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GetApiAsyncData, GetApiData} from './action';
import {SAGA_GET_DATA_ASYNC} from './index';

function* sagaFectingData(action) {
  try {
    const {data} = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/posts',
    );
    console.log('here is saga wala data:', data);
    yield put(GetApiData({payload: data}));
  } catch (error) {
    console.log('some thing went wroung', error);
  }
}

export function* Mysaga() {
  yield takeLatest(SAGA_GET_DATA_ASYNC, sagaFectingData);
}
