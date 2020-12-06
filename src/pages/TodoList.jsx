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

    // showAdd Toggle. nilai default adalah false (karena di hidden dulu). nanti showAdd = true baru munculkan
    const [showAdd, setShowAdd] = useState(false)

    // akan mengirim props.addTodo (Func) kedalam comp TodoList
    const addTodo = (value) => {
        // Membut salinan baru todos [...todos] dan object text baru yang berisi value [...todos, {text: value}] kedalam addTodo
        const addTodo = [...todos, {text: value}];

        // Mengupdate nilai setTodos dengan nilai addTodo
        setTodos(addTodo);

        console.log(addTodo)
    }

    // function untuk toggle btn Add (false/true, hidden/show)
    const showAddToggle = () => {
        setShowAdd(!showAdd)
    }

    return (
        <Paper>
            <Header showAddToggle={showAddToggle} showAdd={showAdd} />
            <TodoForm addTodo={addTodo} showAdd={showAdd} />
            {/* mengirim props todos berisi object todos */}
            <Todos todos={todos} />
        </Paper>
        
    )
}


export default TodoList