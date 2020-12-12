import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'


import Button from '../Button/Button'
import Container from '../../layout/Container'
import Item from '../../layout/Item'

const Header = ({ showAddToggle, showAdd, clearTodo }) => {
    return (
    //     <section className={styles.header}>
    //         {/* showAddToggle = function hidden/show */}
    //         {/* <button className="header-btn main-black-color" onClick={showAddToggle} >
    //             {showAdd ? "Finish" : "Add"}
    //         </button> */}
    //         <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
    //         <div className={styles.headerTitle}>Title TodoList</div>
    //         {/* <button className="header-btn main-red-color" onClick={clearTodo}>Clear</button> */}
    //         <Button text="Clear" onClick={clearTodo} color="red" align="right" />
    //   </section>
        <section className="header-component">
            <Container alignItems="center">
                <Item flex={1}>
                    <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
                </Item>
                <Item flex={2} align="right">
                    <div className={styles.headerTitle}>Title TodoList</div>   
                </Item>
                <Item flex={1}>
                    <Button text="Clear" onClick={clearTodo} color="red" align="right" />
                </Item>
            </Container>
        </section>
    )
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header