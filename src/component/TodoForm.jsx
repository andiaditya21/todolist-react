import React, {useState} from 'react'
import PropTypes from 'prop-types'


const TodoForm = ({addTodo}) => {
    // react HOOKS, initialisasi -> value, set initialisasi -> setValue
    const [value, setValue] = useState("");

    const handleFormSubmit= (e) => {
        e.preventDefault();

        if(!value) {
            alert("Todo tidak boleh kosong!");
            return;
        }

        // function ini berasal dari file lain
        addTodo(value)

        alert(value);
        setValue("")
    }
    console.log("value:", value)

    return (
        <section className="add">
            <form action="" className="add-form" onSubmit={handleFormSubmit}>
                {/* function onChange untuk mencuplik input text dari user dan memasukkannya kedalam setValue kemudian mengganti nilai dari value. atribute value memiliki nilai awal / nilai terupdate dari value hooks  */}
                <input type="text" className="add-input" value={value} onChange={(e)=>{setValue(e.target.value)}}/>   
                <button className="add-btn main-black-color">Add</button>
            </form>
      </section>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default TodoForm