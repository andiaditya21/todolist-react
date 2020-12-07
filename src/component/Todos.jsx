import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

const Todos = ({ todos, completeTodo }) => {
    
    return (
        <section className="todos">
            {
                todos.length > 0 && 
                    todos.map((todo, index) => {
                        return (
                            <Todo key={index} text={todo.text} isCompleted={todo.isCompleted} completeTodo={completeTodo} index={index} />
                        )
                    })
            }
            {
                todos.length === 0 &&
                    <div className="todo-placeholder-text">
                        Add todo by clicking Add button in top left corner
                    </div>
            }
        </section>
    )
}

Todos.propTypes = {
    // props todos berisikan sebuah array of object yang diketahui bentuknya (shape) adalah sebuah text yang bertipe string. 
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
    })),
    completeTodo: PropTypes.func.isRequired
}

export default Todos