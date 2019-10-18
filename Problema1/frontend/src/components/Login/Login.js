import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../API/Api';

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: false,
        errorMsg: '',
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () =>{
        if(this.state.email && this.state.password){
            let data = {
                email: this.state.email,
                password: this.state.password
            }

            api.post("/Users/Login", data).then((res) =>{
                console.log(res);
                this.props.callback(res.data);

            }).catch((e) =>{
                console.log(e);
                if(e.message === "Request failed with status code 409")
                    this.setState({
                        error: true,
                        errorMsg: "verifique sua senha!"
                    })

                else if(e.message === "Request failed with status code 404")
                    this.setState({
                        error: true,
                        errorMsg: "este email não possui cadastro!"
                    })
                else this.setState({error: true, errorMsg: 'erro inesperado, tente mais tarde...'});
            })
        }

        else return this.setState({error: true, errorMsg: 'preencha todos os campos!'})
    }

    render(){
        return(
            <div className="App">
                <header>
                    <h3>Bem-vindo(a) ao serviço de gerenciamento de estabelecimentos</h3>
                    <p>Realize sua autenticação para continuar</p>
                </header>

                <section>
                    <form>
                        <label htmlFor="login-email-input">Email:</label>
                        <input id="login-email-input" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>

                        <label htmlFor="login-senha-input">Senha:</label>
                        <input id="login-senha-input" type="password" name="password" value={this.state.password} onChange={this.handleInput} />

                        {
                            this.state.error ? 
                            (<em style={{color: "red", fontSize: "9pt"}}>{this.state.errorMsg}</em>)
                            : null
                        }

                        <button type="button" onClick={() => this.login()}>ENTRAR</button>
                    </form>

                    <p><Link to="/register">cadastrar uma conta</Link></p>
                </section>
            </div>
        )
    }
}

export default Login