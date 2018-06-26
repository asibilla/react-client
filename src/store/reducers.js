import { GET_USERS } from './actions';

export function transformResponse(state = {}, action) {
  switch(action.type) {
    case GET_USERS : 
      console.log('inside reducer');
    default: 
      return state;
  }
}
