import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'


import Button from '../Button/Button'


const Header = ({ showAddToggle, showAdd, clearTodo }) => {
    return (
        <section className={styles.header}>
            {/* showAddToggle = function hidden/show */}
            {/* <button className="header-btn main-black-color" onClick={showAddToggle} >
                {showAdd ? "Finish" : "Add"}
            </button> */}
            <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
            <div className={styles.headerTitle}>Title TodoList</div>
            {/* <button className="header-btn main-red-color" onClick={clearTodo}>Clear</button> */}
            <Button text="Clear" onClick={clearTodo} color="red" align="right" />
      </section>
    )
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header