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
                todos.map((todo, index) => {
                    return (
                        <Todo key={index} text={todo.text}/>
                    )
                })
            }
        </section>
    )
}

export default Todos