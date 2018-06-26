import axios from 'axios';

const apiUrl = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/${process.env.API_PATH}`;

export function callApi(store) {
  return (next) => (action) => {
    axios.get(apiUrl).then(response => {
      console.log(response);
      next(action);
    });
  }
}
