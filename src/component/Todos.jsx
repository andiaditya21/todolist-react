import React from 'react'
import Todo from './Todo'

const Todos = () => {
    const todos = [
        {
            text: "Belajar JS"
        },
        {
            text: "Belajar ReactJS"
        },
        {
            text: "Belajar React Native"
        },
        {
            text: "Belajar Flutter"
        },

    ]
    return (
        <section className="todos">
            {
                todos.map((todo) => {
                    return (
                        <Todo text={todo.text}/>
                    )
                })
            }
        </section>
    )
}

export default Todos