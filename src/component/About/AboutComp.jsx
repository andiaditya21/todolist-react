import React from 'react'
import { Link } from  'react-router-dom'
import styles from './AboutComp.module.css'

export default function AboutComp() {
    return (
        <section className={styles.aboutPageContentComponent}>
            <h1>About this App</h1>
            <h3>What I Learn by building this app</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ad omnis optio quas provident. Molestias reprehenderit excepturi a amet incidunt, dicta praesentium, dolorem vitae quis modi neque deserunt adipisci. Delectus.</p>
            <Link to="/">Back to Home</Link>
        </section>
    )
}
