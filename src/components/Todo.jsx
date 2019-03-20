import React from 'react'

const Todo = ({ onClick, completed, text }) => {
    return (
        <li style={{ textDecoration: completed ? 'line-through' : 'none', }}
            onClick={ onClick }>
            {text}
        </li>
    )
}

export default Todo;