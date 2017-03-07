import React from 'react';
import {render} from 'react-dom';
import Likes from './likes.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Likes />
      </div>
    );
  }
}

render(<App/>, document.getElementById('main'));
