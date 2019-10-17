import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
        return(
            <div className="App">
                <header>
                    <h3>Bem-vindo(a) ao serviço de gerenciamento de estabelecimentos</h3>
                    <p>Preencha o formulário abaixo para registrar uma conta</p>
                </header>

                <section>
                    <form>
                        <label htmlFor="email-input">Email:</label>
                        <input id="email-input"/>

                        <input placeholder="confirmar email"/>

                        <label htmlFor="senha-input">Senha:</label>
                        <input id="senha-input"/>

                        <input placeholder="confirar senha" />

                        <button>CADASTRAR</button>
                    </form>

                    <p><Link to="/">cancelar</Link></p>
                </section>
            </div>
        )
    }
}

export default Register