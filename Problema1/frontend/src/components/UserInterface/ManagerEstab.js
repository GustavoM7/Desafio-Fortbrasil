import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ManagerEstab extends Component {
    render(){
        return(
            <div className="App">
                <header>
                    <h3>Gerenciamento de estabelecimentos</h3>
                    <p>Selecione um estabelecimento abaixo</p>
                </header>

                <section>
                    <ul>
                        <il>###Lista de estabelecimentos###</il>
                    </ul>
                    <p><Link to="/User">retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default ManagerEstab