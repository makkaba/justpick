import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  static propTypes = {
    index: PropTypes.number,
    markDone: PropTypes.func,
    isFinished: PropTypes.bool,
    children: PropTypes.node,
  }
  
  render() {
    const { children, isFinished, markDone, index } = this.props;
    return (
      <div 
        className = {isFinished ? 'finished' : '' }
        onClick = { () => markDone(index) }
      > 
        { children }
      </div>
    );
  }
}