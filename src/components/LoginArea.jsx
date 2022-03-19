import './LoginArea.css'

import React from 'react'
import Input from './Input'

const LoginArea = () => {

    return (
        <div className="LoginArea">
            <h1>Área de Login</h1>
            <form action="
            ">
                <Input type='text' placeholder='E-mail ou Login' />
                <Input type='password' placeholder='Senha' />
            </form>
            <div className="btn">ENTRAR</div>
            <a href="">Criar uma conta</a>
            <a href="">Esqueci minha senha</a>
        </div>
    )
}


export default LoginArea