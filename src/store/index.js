import { createStore } from 'redux';

const defaultState = {};

function reducer(state = defaultState, action) {
  return state;
}

export default function initStore() {
  return createStore(reducer, defaultState);
}
