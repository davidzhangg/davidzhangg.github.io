import React from 'react'
import { Link } from "react-router-dom"
import '../Styles/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, path, newTab}) => {
    const checkButtonStype = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    if (path[0] === "/") {
        return (
            <Link to={path} className='btn-mobile' target={newTab} rel="noreferrer">
                <button className={`btn ${checkButtonStype} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link> 
        )
    }

    else {
        return (
            <a href={path} className='btn-mobile' target={newTab} rel="noreferrer">
                <button className={`btn ${checkButtonStype} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </a>
        )
    }
}



