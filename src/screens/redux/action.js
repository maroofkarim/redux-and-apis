import {
  API_FETCHING_REQUEST,
  SAGA_DELETE_DATA,
  SAGA_DELETE_DATA_ASYNC,
  SAGA_GET_DATA,
  SAGA_GET_DATA_ASYNC,
  SAGA_GODELETE_DATA,
  SAGA_GODELETE_DATA_ASYNC,
  SAGA_GOGET_DATA,
  SAGA_GOGET_DATA_ASYNC,
  SAGA_GOPOST_DATA,
  SAGA_POST_DATA,
  SAGA_POST_DATA_ASYNC,
} from './index';

// export const fetchingApiData = () => {
//   return async dispatch => {
//     try {
//       const resp = await axios.get(
//         'https://jsonplaceholder.typicode.com/posts',
//       );
//       console.log('action api request Data', resp),
//         dispatch({
//           type: API_FETCHING_REQUEST,
//           payload: resp.data,
//         });
//     } catch (error) {
//       console.log('here is error in action', error);
//     }
//   };
// };

//saga action:

export const GetApiData = ({payload}) => {
  return {
    type: SAGA_GET_DATA,
    payload,
  };
};
export const GetApiAsyncData = () => {
  return {
    type: SAGA_GET_DATA_ASYNC,
  };
};
export const GetPostData = ({payload}) => {
  return {
    type: SAGA_POST_DATA,
    payload,
  };
};

export const GetPostAsycnData = payload => {
  return {
    type: SAGA_POST_DATA_ASYNC,
    payload,
  };
};
export const DeletingAPiData = ({payload}) => {
  return {
    type: SAGA_DELETE_DATA,
    payload,
  };
};

export const DeletingAsyncData = payload => {
  return {
    type: SAGA_DELETE_DATA_ASYNC,
    payload,
  };
};

// here is go rest apis actions:

export const GetGoApiData = ({payload}) => {
  return {
    type: SAGA_GOGET_DATA,
    payload,
  };
};
export const GetGoAPiAsyncData = () => {
  return {
    type: SAGA_GOGET_DATA_ASYNC,
  };
};

export const PostGOApiData = ({payload}) => {
  return {
    type: SAGA_GOPOST_DATA,
    payload,
  };
};
export const PostGoApiAsyncData = () => {
  return {
    type: SAGA_POST_DATA_ASYNC,
  };
};
export const DeleteGoApiData = ({payload}) => {
  return {
    type: SAGA_GODELETE_DATA,
    payload,
  };
};
export const DeleteGoApiAsyncData = () => {
  return {
    type: SAGA_GODELETE_DATA_ASYNC,
  };
};
