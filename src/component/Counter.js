import React ,{Component, PropTypes}from 'react';

class Counter extends Component{
  render(){
    const {addNum,subNum,num} = this.props;
    return (
      <div>
      <p>{num}&nbsp;times</p>
      <button onClick={addNum}>+</button>
      <button onClick={subNum}>-</button>
      </div>
    );
  }
}
export default Counter;
