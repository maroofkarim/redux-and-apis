import {
  SAGA_DELETE_DATA,
  SAGA_GET_DATA,
  SAGA_GOGET_DATA,
  SAGA_GOPOST_DATA,
  SAGA_POST_DATA,
  SAGA_GO_DELETE_DATA,
} from './index';

//intial state
const initialState = {
  ApiData: null,
  ApiPutData: null,
  ApiDeleteData: null,
  GoApiData: null,
  GoApiPutData: null,
  GoApiDeleteData: null,
};

export const apiReducerData = (state = initialState, action) => {
  console.log({action: action.payload});
  switch (action.type) {
    case SAGA_GET_DATA: {
      const _state = {...state};
      _state.ApiData = action.payload;
      return _state;
    }
    case SAGA_POST_DATA: {
      const _state = {...state};
      _state.ApiPutData = action.payload;
      return _state;
    }
    case SAGA_DELETE_DATA: {
      const _state = {...state};
      _state.ApiDeleteData = action.payload;
      return _state;
    }
    case SAGA_GOGET_DATA: {
      const _state = {...state};
      _state.GoApiData = action.payload;
      console.log('reduu ============ ', _state);
      return _state;
    }
    case SAGA_GOPOST_DATA: {
      const _state = {...state};
      _state.GoApiPutData = action.payload;
      return _state;
    }
    case SAGA_GO_DELETE_DATA: {
      const _state = {..._state};
      _state.GoApiDeleteData = action.payload;
      return _state;
    }
    default:
      return state;
  }
};
