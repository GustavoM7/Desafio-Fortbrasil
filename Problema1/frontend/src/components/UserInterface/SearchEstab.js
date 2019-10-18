import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../API/Api';

class SearchEstab extends Component {

    state = {
        estabs: [],
        search: '',
    }


    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getUserEmail = (id) =>{

        console.log(id);
        api.get("/Users/" + parseInt(id), {}).then((res) => {
            console.log(res)
            return res.data[0].email
        }).catch(()=>{
            console.log("WTF");
            return undefined
        })
    }

    filter = () =>{
        alert("Lamentamos, esta funcionalidade ainda não foi implentada...")
    }

    componentDidMount(){
        api.get("/Estabs", {}).then((res) => {
            this.setState({
                estabs: res.data
            })
        })
    }

    render(){
        return(
            <div className="App">
                <header>
                    <h3>Buscar estabelecimentos próximos</h3>
                    <p>Informe abaixo o endereço</p>
                </header>

                <section>
                    <form>
                        <label htmlFor="search-input" >Endereço:</label>
                        <input input id="search-input" type="text" name="search" value={this.state.search} onChange={this.handleInput}/>

                        <button type="button" onClick={() => this.filter()} >BUSCAR</button>
                    </form>

                    {
                        this.state.estabs.length === 0?
                        (<em> Nenhum estabelecimento no momento.</em>):

                        (
                        <table className="App-table">
                            <thead>
                                <th>NOME</th> <th>LOCAL</th> <th>TELEFONE</th><th>PROPRIETÁRIO</th>
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
                                            <td>
                                                {this.getUserEmail(estab.user)}
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

export default SearchEstab