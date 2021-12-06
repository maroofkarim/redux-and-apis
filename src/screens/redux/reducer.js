import {SAGA_GET_DATA} from './index';

//intial state
const initialState = {
  ApiData: null,
};

export const apiReducerData = (state = initialState, action) => {
  console.log({action: action.payload});
  switch (action.type) {
    case SAGA_GET_DATA: {
      const _state = {...state};
      _state.ApiData = action.payload;
      return _state;
    }

    default:
      return state;
  }
};
