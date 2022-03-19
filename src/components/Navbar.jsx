import './Navbar.css'
import React from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {

    return (
            <div className='Navbar'>
                <a href="">Início</a>
                <a href="">Sobre Nós</a>
                <a href="" className='active'>Login </a>
            </div>
    )
}

export default Navbar