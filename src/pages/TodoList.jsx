import React, { useState} from 'react'

import Header from '../component/Header/Header'
import Paper from '../component/Paper/Paper'
import TodoForm from '../component/Todo Form/TodoForm'
import Todos from '../component/Todos/Todos'

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
    // USE CASE -> Ketika btn Add diaktifkan, maka btn clear tidak bisa dijalankan. Sebaliknya, jika btn Add nonaktif, maka btn clear bisa digunakan
    // default showAdd adalah false. Menggunakan If conditional, jika negasi dari showAdd bernilai true (Inisialisasi awal showAdd = false, berarti inisialisasi awal untuk conditional ini adalah true), maka akan menjalankan setTodos menjadi array kosong. Kebalikannya, kalo showAdd bernilai false, maka tidak akan melakukan apa2
    const clearTodo = () => {
        !showAdd && setTodos([])
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