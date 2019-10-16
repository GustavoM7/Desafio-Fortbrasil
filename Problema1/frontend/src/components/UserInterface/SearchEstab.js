import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchEstab extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Buscar estabelecimentos próximos</h1>
                    <p>Informe abaixo o endereço</p>
                </header>

                <section>
                    <form>
                        <label>Endereço:</label>
                        <input/>
                    </form>
                    <ul>
                        <li>###Resultados###</li>
                    </ul>

                    <p><Link to="/User">Retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default SearchEstab