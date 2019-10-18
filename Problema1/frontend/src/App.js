import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Hall from './components/UserInterface/Hall';
import ManagerEstab from './components/UserInterface/ManagerEstab';
import NewEstabForm from './components/UserInterface/NewEstabForm';
import SearchEstab from './components/UserInterface/SearchEstab';
import NotFound from './components/NotFound/NotFound';
import api from './components/API/Api';
import './App.css';

//Este componente gerenciarar as rotas da aplicação
class App extends Component {
  
  //user guardará um obj de usuário após o login
  state = {
    user: null
  }


  //função que será herdada pelo componente de login, recebe um obj de usuário logado
  loginCallback = (user) =>{
    this.setState({
      user: user
    })

    //guardando usuário para verificação de login após refresh
    localStorage.setItem('@fbgm7app/user', JSON.stringify(user))

  }

  logout = () =>{
    api.get("/Users/Logout", {}).then((res) =>{
      console.log(res);
      localStorage.removeItem('@fbgm7app/user');
    });

    this.setState({user:null});
  }

  componentDidMount(){
    //recuperando usuário caso tenha havido login antes de refresh
    let user = localStorage.getItem('@fbgm7app/user');

    if (user !== null){
      api.post("/Users/Login/Current", user).then((res) =>{
        if (res){
            this.setState({
              user: JSON.parse(user)
            })
        } else localStorage.removeItem('@fbgm7app/user');
      })
      
    }
  }

  render(){
    return (
        <BrowserRouter>
          {
            //Botão para logout aparecerá caso houver usuário logado
            this.state.user ? (<button id="logout-button" onClick={() => this.logout()}>SAIR</button>):null
          }
          <Switch>
            <Route exact path="/" render={() => this.state.user ? <Redirect to="/User"/> : <Login callback={this.loginCallback} />}/>
            <Route exact path="/Register" render={() => this.state.user ? <Redirect to="/User"/> : <Register/>}/>
            <Route exact path="/User" render={() => !this.state.user ? <Redirect to="/"/> : <Hall username={this.state.user.name} />}/>
            <Route exact path="/User/NewEstab" render={() => !this.state.user ? <Redirect to="/"/> : <NewEstabForm/>}/>
            <Route exact path="/User/ManagerEstab" render={() => !this.state.user ? <Redirect to="/"/> : <ManagerEstab/>}/>
            <Route exact path="/User/SearchEstab" render={() => !this.state.user ? <Redirect to="/"/> : <SearchEstab/>}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      )
  }
  
}

export default App;