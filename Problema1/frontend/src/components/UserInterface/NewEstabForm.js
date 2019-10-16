import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewEstabForm extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Registro de novo Estabelecimento</h1>
                    <p>Insira os dados do novo Estabelecimento abaixo:</p>
                </header>

                <section>
                    <form>
                        <label>Nome:</label>
                        <input/>

                        <label>Endereço:</label>
                        <input/>

                        <button>Registrar</button>
                    </form>

                    <p><Link to="/User">Retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default NewEstabForm