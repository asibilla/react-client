import React from 'react';
import { getUsers } from './store/actions';

class App extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(getUsers({}));
  }

  render() {
    return (
      <div className="App">
        <h1>The app</h1>
      </div>
    );
  }
}

export default App;
