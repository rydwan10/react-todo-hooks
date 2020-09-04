import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <React.Fragment>
            {todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                    ))
            }
        </React.Fragment>
    )
}

export default TodoList
