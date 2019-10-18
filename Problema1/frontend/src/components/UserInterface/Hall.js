import React from 'react';
import { Link } from 'react-router-dom';

const Hall = (props) => {
    return(
        <div className="App">
            <header>
                <h3>Bem vindo(a) {props.username}!</h3>
            </header>

            <section className="Hall-section">
                <Link to="/User/NewEstab">Registrar novo estabelecimento</Link>
                <Link to="/User/ManagerEstab">Gerenciar estabelecimentos</Link>
                <Link to="/User/SearchEstab">Buscar estabelecimentos próximos</Link>
            </section>
        </div>
    )
}

export default Hall;