import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './TodoForm.module.css'
import cx from 'classnames'

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
                (<section className={styles.add}>
                    <form action="" className={styles.addForm} onSubmit={handleFormSubmit}>
                        {/* function onChange untuk mencuplik input text dari user dan memasukkannya kedalam setValue kemudian mengganti nilai dari value. atribute value memiliki nilai awal / nilai terupdate dari value hooks  */}
                        <input type="text" className={styles.addInput} value={value} onChange={(e)=>{setValue(e.target.value)}}/>   
                        <button className={cx(styles.addBtn, styles.mainBlackColor)}>Add</button>
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