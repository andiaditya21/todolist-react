import React from "react"
import PropTypes from 'prop-types'
import styles from './Paper.module.css'

const Paper = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                {/* container & frame me-wrapper beberapa children yaitu section header, add/TodoForm, todo/Todos */}
                {children}
            </div>
        </div>
    )
}

Paper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Paper;