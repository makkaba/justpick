import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import './App.css';
import Item from './Item';
import TodoForm from './TodoForm';
import { addTodo, removeTodo, markDone } from './modules/Todo';
import * as FirebaseAction from './firebaseHelper';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      todos: []
    };
  }
  
  componentDidMount() {
    //로딩되자 마자 익명의 사용자로 로그인 시킨다 
    FirebaseAction.onAuthStateChanged();
    
    FirebaseAction.getTodoList(this.onChangeList);
    
    //this.setState(todos);
  }
  
  
  // markDone(index) {
  //   const index = this.state.todoList.findIndex(t => t.title === title);
  //   console.log(title);
  //   this.setState({
  //     todoList: [
  //       ...this.state.todoList.slice(0, index),
  //       {
  //         title: title,
  //         isFinished: !this.state.todoList[index].isFinished
  //       },
  //       ...this.state.todoList.slice(index + 1),
  //     ]
  //   });
  // }

  onChangeList(todos){
    this.setState({...this.state, todoList: todos});
  }


  render() {
    //console.log(this.props);
    const { addTodo, markDone } = this.props;
    return (
        <div>
          <TodoForm addTodo = { addTodo }/>
          {
              this.props.todoList.map((item, index) =>
                <Item 
                  isFinished = {item.isFinished}
                  key={index}
                  index= {index}
                  markDone = { markDone }
                >
                  { item.title }
                </Item>
              )
          }
        </div>
    );
  }
}
function mapStateToProps(state){
  return {
    todoList: state.Todo.todoList
  };
}

//state 중에서 Todo를 가져와서 이렇게 리턴하겠다
export default connect(mapStateToProps, { addTodo, removeTodo, markDone })(App);
