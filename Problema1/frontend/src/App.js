import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Hall from './components/UserInterface/Hall';
import ManagerEstab from './components/UserInterface/ManagerEstab';
import NewEstabForm from './components/UserInterface/NewEstabForm';
import SearchEstab from './components/UserInterface/SearchEstab';
import NotFound from './components/NotFound/NotFound';
import './App.css';

//Este componente gerenciarar as rotas da aplicação
class App extends Component {
  
  //auth guardará o estado da auteticação e será usado para redirecionamentos
  state = {
    auth: false
  }


  //Função para alternar o estado de auth
  changeAuth = () =>{
    this.setState({auth: this.state.auth ? false : true});
  }

  render(){
    return (
        <BrowserRouter>
          {
            //Botão para logout aparecerá caso houver usuário logado
            this.state.auth ? (<button id="logout-button" onClick={() => this.changeAuth()}>SAIR</button>):null
          }
          <Switch>
            <Route exact path="/" render={() => this.state.auth ? <Redirect to="/User"/> : <Login/>}/>
            <Route exact path="/Register" render={() => this.state.auth ? <Redirect to="/User"/> : <Register/>}/>
            <Route exact path="/User" render={() => !this.state.auth ? <Redirect to="/"/> : <Hall/>}/>
            <Route exact path="/User/NewEstab" render={() => !this.state.auth ? <Redirect to="/"/> : <NewEstabForm/>}/>
            <Route exact path="/User/ManagerEstab" render={() => !this.state.auth ? <Redirect to="/"/> : <ManagerEstab/>}/>
            <Route exact path="/User/SearchEstab" render={() => !this.state.auth ? <Redirect to="/"/> : <SearchEstab/>}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      )
  }
  
}

export default App;