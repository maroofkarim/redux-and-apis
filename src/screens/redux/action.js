import {
  API_FETCHING_REQUEST,
  SAGA_GET_DATA,
  SAGA_GET_DATA_ASYNC,
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
