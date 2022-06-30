import Navbar from "./navbar";
import Counters from './counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters :[
        {id: 0, value: 4 },
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0}

    ]

 };

 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index =  counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
    
  
    
}

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index =  counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});
  

  
}

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counters});
};

    
  
    render() {
      return (
        <div>
          <Navbar totalCounters ={this.state.counters.filter(c=> c.value> 0 ).length } />
        <main className="container">
           <Counters 
           counters = {this.state.counters}
           onReset ={this.handleReset}
           onDelete ={this.handleDelete}
           onIncrement ={this.handleIncrement}
           onDecrement ={this.handleDecrement}>

            </Counters>
        </main>
        </div>
      );
    }
      
  };
  
  export default App;
  // render(<Counter />, document.getElementById('root'));