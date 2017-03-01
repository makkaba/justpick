import React, { Component, PropTypes } from 'react';

export default class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  };
  
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }
  
  render() {
    const { addTodo } = this.props;
    const { content } = this.state;
    return(
      <div>
        <input type="text" onChange={ ({ target }) => this.setState({ content: target.value }) } />
        <button onClick={ () => addTodo(content) }>추가</button>
      </div>
    );
  }
}