import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Bem-vindo(a) ao serviço de gerenciamento de estabelecimentos</h1>
                    <p>Preecha o formulário abaixo para registrar uma conta</p>
                </header>

                <section>
                    <form>
                        <label>Email:</label>
                        <input/>

                        <label>Confirmação de email:</label>
                        <input/>

                        <label>Senha:</label>
                        <input/>

                        <label>Confirmação de senha:</label>
                        <input/>

                        <button>Cadastrar</button>
                    </form>

                    <p><Link to="/">Cancelar</Link></p>
                </section>
            </div>
        )
    }
}

export default Register