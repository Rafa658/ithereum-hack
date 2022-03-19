import './Navbar.css'
import React from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {

    return (
            <div className='Navbar'>
                <a href="" class='active'>Início</a>
                <a href="">Sobre Nós</a>
                <a href="">Blockchain</a>
                <a href="">NFT</a>
                <a href="">Solidity</a>
            </div>
    )
}

export default Navbar