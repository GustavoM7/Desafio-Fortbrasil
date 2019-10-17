import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchEstab extends Component {
    render(){
        return(
            <div className="App">
                <header>
                    <h3>Buscar estabelecimentos próximos</h3>
                    <p>Informe abaixo o endereço</p>
                </header>

                <section>
                    <form>
                        <label>Endereço:</label>
                        <input/>

                        <button>BUSCAR</button>
                    </form>
                    <ul>
                        <li>###Resultados###</li>
                    </ul>

                    <p><Link to="/User">retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default SearchEstab