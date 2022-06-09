import React from 'react'
import { Todo } from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
    return todos.map((todo) => <li>{<Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />}</li>);
};

export default TodoList