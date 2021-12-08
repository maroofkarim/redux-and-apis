import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  DeleteGoApiData,
  DeletingAPiData,
  GetApiAsyncData,
  GetApiData,
  GetGoApiData,
  GetPostData,
  PostGoApiAsyncData,
  PostGOApiData,
} from './action';
import {
  SAGA_DELETE_DATA_ASYNC,
  SAGA_GET_DATA_ASYNC,
  SAGA_GODELETE_DATA_ASYNC,
  SAGA_GOGET_DATA,
  SAGA_GOGET_DATA_ASYNC,
  SAGA_GOPOST_DATA,
  SAGA_GOPOST_DATA_ASYNC,
  SAGA_POST_DATA_ASYNC,
} from './index';
const Token =
  'eed1728a508ef515adecfbac7cce85cb712c6e4db80bfd70b238293472d0ee8b';

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
function* sagaPutData(action) {
  console.log('Working');
  const {title, body, id} = action?.payload;
  try {
    const {data} = yield call(axios, {
      url: `https://jsonplaceholder.typicode.com/posts/1`,
      method: 'PUT',
      data: {
        userId: 1,
        id: id,
        title: title,
        body: body,
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log('here is put saga', data);
    yield put(GetPostData({payload: data}));
  } catch (error) {
    console.log('here is error in sagaPutData', error);
  }
}
function* sagaDeleteData(action) {
  const {id} = action?.payload;
  try {
    const {data} = yield call(axios, {
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'DELETE',
    });
    yield put(DeletingAPiData({payload: data}));
  } catch (error) {
    console('error in deleting saga', error);
  }
}

// here are another restApis :

function* SagaGoGetData(action) {
  try {
    const {data} = yield call(axios, {
      url: 'https://gorest.co.in/public/v1/posts',
      method: 'GET',
    });
    yield put(GetGoApiData({payload: data.data}));
    console.log('here in SAGA GOGET DAta', data.data);
  } catch (error) {
    console.log('here you got error in SAGA GOGET DATA', error);
  }
}

function* SagaGoPostData(action) {
  const {title, body, id} = action?.payload;
  console.log('here is data in saga :', {title, id, body});
  try {
    const {data} = yield call(axios, {
      url: 'https://gorest.chttps://gorest.co.in/public/v1/comments',
      method: 'PUT',
      data: {
        id: id,
        post_id: 104,
        name: title,
        email: 'divya_shukla@huel.co',
        body: body,
      },
    });
    console.log('here is saga go post data', data);
    yield put(PostGOApiData({payload: data}));
  } catch (error) {
    console.log('here is error in your GOPOST SAGA', error);
  }
}

function* SagaGoDeleteData(action) {
  const {id} = action?.payload;
  console.log('here is your id in saga', id);
  try {
    console.log('working here dost');
    const {data} = yield call(axios, {
      url: `https://gorest.co.in/public/v1/users/${id}`,
      method: 'DELETE',
    });
    yield put(DeleteGoApiData({payload: data}));
  } catch (error) {
    console.log('here is error in GODelete SAGA ', error);
  }
}

export function* Mysaga() {
  yield takeLatest(SAGA_GET_DATA_ASYNC, sagaFectingData);
  yield takeLatest(SAGA_POST_DATA_ASYNC, sagaPutData);
  yield takeLatest(SAGA_DELETE_DATA_ASYNC, sagaDeleteData);
  // here is go rest api methods:
  yield takeLatest(SAGA_GOGET_DATA_ASYNC, SagaGoGetData);
  yield takeLatest(SAGA_GOPOST_DATA_ASYNC, SagaGoPostData);
  yield takeLatest(SAGA_GODELETE_DATA_ASYNC, SagaGoDeleteData);
}
