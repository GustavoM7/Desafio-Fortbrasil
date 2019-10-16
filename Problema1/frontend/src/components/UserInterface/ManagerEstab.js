import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ManagerEstab extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Gerenciamento de estabelecimentos</h1>
                    <p>Selecione um estabelecimento abaixo</p>
                </header>

                <section>
                    <ul>
                        <il>###Lista de estabelecimentos###</il>
                    </ul>
                    <p><Link to="/User">Retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default ManagerEstab