import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Bem-vindo(a) ao serviço de gerenciamento de estabelecimentos</h1>
                    <p>Realize sua autenticação para continuar</p>
                </header>

                <section>
                    <form>
                        <label>Email:</label>
                        <input/>

                        <label>Senha:</label>
                        <input/>

                        <button>Logar</button>
                    </form>

                    <p><Link to="/register">cadastrar uma conta</Link></p>
                </section>
            </div>
        )
    }
}

export default Login