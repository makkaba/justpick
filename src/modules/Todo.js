import * as FirebaseAction from '../firebaseHelper';

/*
액션들 
=> 어떤 일이 일어났다 something happens.
*/
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const MARK_DONE = 'MARK_DONE';


/*
액션 생성자 함수(action creator)

*/
export function addTodo(title) {
  FirebaseAction.addTodo({ title });
  
  
  return {
    type: ADD_TODO,
    title: title
  }
}

export function markDone(index) {
  return {
    type: MARK_DONE,
    index: index
  }
}

const initialState = {
  todoList : [],
}


//리듀서 (reducer)
export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return {...state, todoList: [...state.todoList, {title: action.title, isFinished: false}] }
    case REMOVE_TODO:
      return {...state, todoList: state.todoList.filter(item => item.index !== action.index) };  
    case MARK_DONE:
      return {
        todoList: [
          ...state.todoList.slice(0, action.index),
          {
            ...state.todoList[action.index],
            isFinished: !state.todoList[action.index].isFinished
          },
          ...state.todoList.slice(action.index + 1),
        ]
      };
  }
  
  return state;
  
}
