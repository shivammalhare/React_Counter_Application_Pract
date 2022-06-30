import React, { Component } from 'react';
import Counter from './Counter';
import Counters from './counters';

class Navbar extends Component {
    
    render() { 
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand mb-0 h1">Counter
               <span className="badge badge-pill badge-secondary m-2">{this.props.totalCounters}</span></a>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;