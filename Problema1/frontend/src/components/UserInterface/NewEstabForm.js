import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewEstabForm extends Component {
    render(){
        return(
            <div className="App">
                <header>
                    <h3>Registro de novo Estabelecimento</h3>
                    <p>Insira os dados do novo Estabelecimento abaixo:</p>
                </header>

                <section>
                    <form>
                        <label>Nome:</label>
                        <input/>

                        <label>Endereço:</label>
                        <input/>

                        <button>REGISTRAR</button>
                    </form>

                    <p><Link to="/User">retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default NewEstabForm