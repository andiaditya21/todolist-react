import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todos.module.css'

import Todo from '../Todo/Todo'

const Todos = ({ todos, completeTodo }) => {
    
    return (
        <section className={styles.todos}>
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
                    <div className={styles.todoPlaceholderText}>
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