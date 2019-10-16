import React from 'react';
import { Link } from 'react-router-dom';

const Hall = () => {
    return(
        <div>
            <header>
                <h1>Bem vindo(a)!</h1>
            </header>

            <section>
                <Link to="/User/NewEstab">Registrar novo estabelecimento</Link>
                <Link to="/User/ManagerEstab">Gerenciar estabelecimentos</Link>
                <Link to="/User/SearchEstab">Buscar estabelecimentos próximos</Link>
            </section>
        </div>
    )
}

export default Hall;