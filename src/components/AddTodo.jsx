import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={ node => input = node } placeholder="New Item"></input>
            <button onClick={ () => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>Add</button>
        </div>
    );
}

export default connect()(AddTodo)