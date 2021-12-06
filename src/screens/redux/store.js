import {createStore, applyMiddleware, combineReducers} from 'redux';
import {apiReducerData} from './reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {Mysaga} from './saga';
const rootReducer = combineReducers({apiReducerData});
export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(thunk)),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(Mysaga);

  return store;
};
