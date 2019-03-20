import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'

import Todo from './Todo';

const mapState = (state) => ({
    todos : state.todos
})

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
          {todos.map((todo, index) =>
            <Todo key={index}
                {...todo}
                onClick={ () => onTodoClick(index) }
            />
          )}
        </ul>
    )
}

export default connect(mapState, { onTodoClick: toggleTodo })(TodoList)