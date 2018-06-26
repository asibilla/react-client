export const GET_USERS = 'GET_USERS';

const createAction = (action) => {
  return (data) => {
    return {
      type: action,
      data
    };
  } 
}

export const getUsers = createAction(GET_USERS);

