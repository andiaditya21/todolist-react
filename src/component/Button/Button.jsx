import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import cx from 'classnames'

// props.color akan memuat data main-black/red-color, props.align akan memuat data text-left/text-right
const Button = ({ text, onClick, color, align }) => {
    
    // MENCOBA PAKAI LIBRARY CLASSNAMES
    // membuat variable yang memuat kemungkinan className yang dubutuhkan dari comp Button. jangan lupa className menerima string bukan array!. Jadi jangan lupa ubah ke string (join(" "))
    // const classNames = [
    //     "header-btn", // bisa juga ditulis dengan cara styles.headerBtn (Jika menggunakan module.css)
    //     // IF conditional rendering berdasarkan default prop / props yang dilempar dari comp lain
    //     color === "black" && "main-black-color",
    //     color === "red" && "main-red-color",
    //     align === "left" && "align-left",
    //     align === "right" && "align-right"
    // ].join(" ")

    // MENCOBA PAKAI LIBRARY CLASSNAMES UNTUK MENGGANTIKAN SYNTAX DIATAS
    const classNames = cx(styles.headerBtn, {
        // dynamic classNames menggunakan computed keys
        [styles.mainRedColor] : color === "red",
        [styles.mainBlackColor] : color === "black",
        [styles.alignLeft] : align === "left",
        [styles.alignRight] : align === "right" 
    })


    return (
        <button className={classNames} onClick={onClick}>{text}</button>
    )
}

// default props jika ada beberapa props yang tidak diberikan
Button.defaultProps = {
    text: "Button",
    color: "black"
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // memastikan spesific value hanya antara black atau red saja
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
}

export default Button