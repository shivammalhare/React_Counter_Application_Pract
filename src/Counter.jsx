import React, { Component } from 'react';
 import Counters, {value} from './counters';
class Counter extends Component {
  state= {
    
    // imgurl:'https://picsum.photos/200'
    tags:[] 
  };
  styles = { 
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
     if(this.state.tags.length=== 0) return <p></p>;
     return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  
  

  // doHandleIncrement= () => {
 
  //   this.handleIncrement({id:1});

  // }
  render() {
    // let classes = this.getBadgeClasses();
    
    console.log("props", this.props);

    return(
      <div>

        <h4> Counter Value {this.props.counter.value}</h4>
        <h4> Counter Number {this.props.counter.id}</h4>
        <span style = {this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <img src= {this.state.imgurl} alt="" srcset="" /> */}
        <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

        <ul>
        {this.state.tags.length === 0 && ''}
          {this.renderTags() }
          </ul>
        </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const{value} = this.props.counter;
     return value === 0 ? 'Zero' : value;
   }
}
export default Counter;