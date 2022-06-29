import React, { Component } from 'react';
import { render } from 'react-dom';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';
import Counters from './counters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <main className="container">
        <Counters />
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
// render(<Counter />, document.getElementById('root'));