import { createStore, applyMiddleware } from 'redux';
import { transformResponse } from './reducers';
import { callApi } from './middleware';


export default function initStore() {
  return createStore(transformResponse, applyMiddleware(callApi));
}
