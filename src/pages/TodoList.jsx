import React, { useState} from 'react'


import Header from '../component/Header'
import Paper from '../component/Paper'
import TodoForm from '../component/TodoForm'
import Todos from '../component/Todos'

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: "Belajar JS"},
        {text: "Belajar React JS"},
        {text: "Belajar React Native"},
        {text: "Belajar Flutter"},
    ])

    // akan mengirim props.addTodo (Func) kedalam comp TodoList
    const addTodo = (value) => {
        // Membut salinan baru todos [...todos] dan object text baru yang berisi value [...todos, {text: value}] kedalam addTodo
        const addTodo = [...todos, {text: value}];

        // Mengupdate nilai setTodos dengan nilai addTodo
        setTodos(addTodo);

        console.log(addTodo)
    }

    return (
        <Paper>
            <Header/>
            <TodoForm addTodo={addTodo} />
            {/* mengirim props todos berisi object todos */}
            <Todos todos={todos} />
        </Paper>
        
    )
}


export default TodoList