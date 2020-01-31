import React, { Component } from 'react';
import { render } from 'react-dom';
import PivotalUI from './pivotal_ui';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <PivotalUI />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
