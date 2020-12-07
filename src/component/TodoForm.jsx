import React, {useState} from 'react'
import PropTypes from 'prop-types'

// function comp menerima props.addTodo
const TodoForm = ({addTodo, showAdd}) => {
    // react HOOKS, initialisasi -> value, set initialisasi -> setValue
    const [value, setValue] = useState("");

    const handleFormSubmit= (e) => {
        e.preventDefault();

        if(!value) {
            alert("Todo tidak boleh kosong!");
            return;
        }

        // conditional untuk menvalidasi input text hanya beberapa karakter saja
        if(value.length > 25) {
            alert("Maksimal todo berisi 25 karakter");
            setValue("");
            return
        }

        // function ini berasal dari file lain
        addTodo(value)

        // alert(value);
        setValue("")
    }

    return (
            showAdd ? 
                (<section className="add">
                    <form action="" className="add-form" onSubmit={handleFormSubmit}>
                        {/* function onChange untuk mencuplik input text dari user dan memasukkannya kedalam setValue kemudian mengganti nilai dari value. atribute value memiliki nilai awal / nilai terupdate dari value hooks  */}
                        <input type="text" className="add-input" value={value} onChange={(e)=>{setValue(e.target.value)}}/>   
                        <button className="add-btn main-black-color">Add</button>
                    </form>
                </section>)
             : null
        
        
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
}

export default TodoForm