import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../API/Api';


class Register extends Component {

    state = {
        name: '',
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: '',
        error: false,
        errorMsg: '',
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createUser = async () =>{
        let st = this.state;

        if(st.name && st.email && st.emailConfirm && st.password && st.passwordConfirm){
            if(st.email !== st.emailConfirm) return this.setState({error: true, errorMsg: "emails não coincidem"})

            if(st.password !== st.passwordConfirm) return this.setState({error: true, errorMsg: "senhas não coincidem"})

            let newUser = {
                name: st.name,
                email: st.email,
                password: st.password
            }

            api.post('/Users', newUser).then((res) => {
                console.log(res);
                alert("Conta cadastrada com sucesso!");

                this.setState({
                    name: '',
                    email: '',
                    emailConfirm: '',
                    password: '',
                    passwordConfirm: '',
                    error: false,
                    errorMsg: '',
                });

            }).catch((error) => {
                console.log(error.code);
                if(error.message === "Request failed with status code 409")
                    this.setState({
                        error: true,
                        errorMsg: "este email já possui cadastro!"
                    })
                
                else this.setState({
                        error: true,
                        errorMsg: "erro inesperado, tente novamente mais tarde..."
                    })
            });
        }

        else this.setState({error: true, errorMsg: "preencha todos os campos"})
    }

    render(){
        return(
            <div className="App">
                <header>
                    <h3>Bem-vindo(a) ao serviço de gerenciamento de estabelecimentos</h3>
                    <p>Preencha o formulário abaixo para registrar uma conta</p>
                </header>

                <section>
                    <form>
                        <label htmlFor="name-input">Nome:</label>
                        <input id="name-input" type="text" name="name" value={this.state.name} onChange={this.handleInput} />

                        <label htmlFor="email-input">Email:</label>
                        <input id="email-input" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>

                        <input type="text" name="emailConfirm" value={this.state.emailConfirm} onChange={this.handleInput} placeholder="confirmar email"/>

                        <label htmlFor="senha-input">Senha:</label>
                        <input id="senha-input" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>

                        <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleInput} placeholder="confirar senha" />

                        {
                            this.state.error ? 
                            (<em style={{color: "red", fontSize: "9pt"}}>{this.state.errorMsg}</em>)
                            : null
                        }

                        <button type="button" onClick={() => this.createUser()} >CADASTRAR</button>
                    </form>

                    <p><Link to="/">cancelar</Link></p>
                </section>
            </div>
        )
    }
}

export default Register