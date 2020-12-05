import React, { useState} from 'react'


import Header from '../component/Header'
import Paper from '../component/Paper'
import TodoForm from '../component/TodoForm'
import Todos from '../component/Todos'

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: "Belajar JS"},
        {text: "Belajar React JS"},
        {text: "Belajar React NAtive"},
        {text: "Belajar Flutter"},
    ])

    return (
        <Paper>
            <Header/>
            <TodoForm/>
            {/* mengirim props todos berisi object todos */}
            <Todos todos={todos} />
        </Paper>
        
    )
}


export default TodoList