import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../API/Api';

class ManagerEstab extends Component {
    state = {
        userid: this.props.userid,
        estabs: [],
    }


    loadEstabs = () => {
        api.get("/Users/Estabs/" + this.state.userid, {}).then((res) => {
            this.setState({
                estabs: res.data
            })
        })
    }

    delete = (estabid) => {
        api.delete("/Estabs/" + parseInt(estabid) , {}).then((res) => {
            console.log(res);
            alert("Estabelecimento removido")
            this.loadEstabs();
        }).catch(() => {
            alert("Erro inesperado...")
        })
    }

    update = () => {
        alert("Lamentamos, esta funcionalidade ainda não foi implementada...")
    }


    componentDidMount(){
        this.loadEstabs()
    }

    render(){
        return(
            <div className="App">
                <header>
                    <h3>Gerenciamento de estabelecimentos</h3>
                    <p>Selecione um estabelecimento abaixo</p>
                </header>

                <section>

                    {
                        this.state.estabs.length === 0?
                        (<em> Nenhum estabelecimento no momento.</em>):

                        (
                        <table className="App-table">
                            <thead>
                                <th>NOME</th> <th>LOCAL</th> <th>TELEFONE</th><th>---</th><th>---</th>
                            </thead>
                            {
                                this.state.estabs.map(estab => {
                                    return(
                                        <tr key={estab.id}>
                                            <td>
                                                {estab.name}
                                            </td>
                                            <td>
                                                {estab.adress}
                                            </td>

                                            <td>
                                                {estab.phone}
                                            </td>
                                            <td className="App-table-update" onClick={() => this.update(estab)}>
                                                ATUALIZAR
                                            </td>
                                            <td className="App-table-delete" onClick={() => this.delete(estab.id)}>
                                                DELETAR
                                            </td>

                                        </tr>
                                    )
                                })
                            }

                        </table>)
                        
                    }

                    <p><Link to="/User">retornar</Link></p>
                </section>
            </div>
        )
    }
}

export default ManagerEstab