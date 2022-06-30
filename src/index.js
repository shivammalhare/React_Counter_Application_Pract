import React, { Component } from 'react';
import { render } from 'react-dom';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

import App from './App';
import ReactDOM from 'react-dom';


class Index extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <main className="container">
        <App />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// render(<Counter />, document.getElementById('root'));