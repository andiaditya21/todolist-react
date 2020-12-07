import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ showAddToggle, showAdd, clearTodo }) => {
    return (
        <section className="header">
            {/* showAddToggle = function hidden/show */}
            <button className="header-btn main-black-color" onClick={showAddToggle} >
                {showAdd ? "Finish" : "Add"}
            </button>
            <div className="header-title">Title TodoList</div>
            <button className="header-btn main-red-color" onClick={clearTodo}>Clear</button>
      </section>
    )
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header