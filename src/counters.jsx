import React, { Component } from 'react'
import Counter from './Counter';


class Counters extends Component {
    state = { 
        counters :[
            {id: 0, value: 4 },
            {id: 1, value: 2},
            {id: 2, value: 3},
            {id: 3, value: 0}

        ]

     };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
     
    render() { 
        return (
            <div>
                <h1>Hello</h1>
                {this.state.counters.map(counter => ( 
                <Counter key={counter.id} onDelete ={this.handleDelete} counter ={counter}>
                    
                    </Counter>
                   ))}
               
           </div>
        );
    }
}
 
export default Counters;