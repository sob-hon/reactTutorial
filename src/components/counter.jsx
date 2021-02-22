import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0
    };
    
    handleIncrement = () => {
        this.setState({ count : this.state.count + 1 })
    }

    render() { 
        return (
            <React.Fragment>
                <span className = {this.handleSpColor()}>{this.formater()}</span>
                <button onClick = {this.handleIncrement} className = 'btn btn-sm'>Increment</button>
            </React.Fragment>
        );
    }


    formater(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    handleSpColor = () => {
        let colors = 'badge mr-4 badge-';
        colors += this.state.count === 0 ? 'warning' : 'primary';
        return colors;
    }
}
 
export default Counter;