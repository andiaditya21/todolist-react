import React from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => {
    return (
        <div className="todo">
            <span className="todo-text">{props.text}</span>
        </div>
    )
}

export default Todo

Todo.propTypes = {
    text: PropTypes.string
}