import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../API/Api';

class NewEstabForm extends Component {

    state = {
        phone: '',
        name: '',
        adress: '',
        owner: this.props.userid,
        error: false,
        errorMsg: '',
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    register = () =>{
        if(this.state.name && this.state.phone && this.state.adress){
            let data = {
                name: this.state.name,
                phone: this.state.phone,
                adress: this.state.adress,
                owner: this.state.owner
            }

            api.post("/Estabs", data).then((res) =>{
                console.log(res);
                alert("Novo estabelecimento registrado com sucesso!");

                this.setState({
                    phone: '',
                    name: '',
                    adress: '',
                    error: false,
                    errorMsg: '',
                })

            }).catch((e) =>{
                console.log(e);
                if(e.message === "Request failed with status code 409")
                    this.setState({
                        error: true,
                        errorMsg: "Este telefone já foi registrado!"
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
                    <h3>Registro de novo Estabelecimento</h3>
                    <p>Insira os dados do novo Estabelecimento abaixo:</p>
                </header>

                <section>
                    <form>
                        <label htmlFor="estab-name">Nome:</label>
                        <input id="estab-name" type="text" name="name" value={this.state.name} onChange={this.handleInput}/>

                        <label htmlFor="estab-adress">Endereço:</label>
                        <input id="estab-adress" type="text" name="adress" value={this.state.adress} onChange={this.handleInput}/>

                        <label htmlFor="estab-phone">Telefone:</label>
                        <input id="estab-phone" type="text" name="phone" value={this.state.phone} onChange={this.handleInput}/>

                        {
                            this.state.error ? 
                            (<em style={{color: "red", fontSize: "9pt"}}>{this.state.errorMsg}</em>)
                            : null
                        }

                        <button type="button" onClick={() => this.register()} >REGISTRAR</button>
                    </form>

                    <p><Link to="/User">retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default NewEstabForm