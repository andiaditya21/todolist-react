import React, { useState} from 'react'


import Header from '../component/Header'
import Paper from '../component/Paper'
import TodoForm from '../component/TodoForm'
import Todos from '../component/Todos'

const TodoList = () => {
    const [todos, setTodos] = useState([
        {text: "Belajar JS", isCompleted: false},
        {text: "Belajar React JS", isCompleted: false},
        {text: "Belajar React Native", isCompleted: false},
        {text: "Belajar Flutter", isCompleted: false},
    ])

    // showAdd Toggle. nilai default adalah false (karena di hidden dulu). nanti showAdd = true baru munculkan
    const [showAdd, setShowAdd] = useState(false)

    // akan mengirim props.addTodo (Func) kedalam comp TodoList
    const addTodo = (value) => {
        
        // Maksimal todo yang diizinkan
        if (todos.length < 6) {
            // Membut salinan baru todos [...todos] dan object text baru yang berisi value [...todos, {text: value}] kedalam addTodo
            const addTodo = [...todos, {text: value, isCompleted: false}];

            // Mengupdate nilai setTodos dengan nilai addTodo
            setTodos(addTodo);
        } else {
            alert("Maximals allowed 10 Todos")
        }
        
    }
    // console.log("panjang", todos.length)

    // function untuk toggle btn Add (false/true, hidden/show)
    const showAddToggle = () => {
        setShowAdd(!showAdd)
    }

    // function untuk delete todo list
    const clearTodo = () => {
        setTodos([])
    }

    // function khusus ketika todo ada yang complete berdasarkan index masing-masing todo
    const completeTodo = (index) => {
        const addedTodo = [...todos];
        // Re-assign. Men-set isCompleted menjadi negasi (kebalikan) dari keadaan awal. Mis. awalnya isCompleted = false menjadi isCompleted = true, begitu sebaliknya
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

        // meng-update nilai todos berdasarkan nilai addedTodo
        setTodos(addedTodo)

        console.log("todos", todos)
    }

    return (
        <Paper>
            <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodo={clearTodo} />
            <TodoForm addTodo={addTodo} showAdd={showAdd} />
            {/* mengirim props todos berisi object todos */}
            <Todos todos={todos} completeTodo={completeTodo} />
        </Paper>
        
    )
}


export default TodoList