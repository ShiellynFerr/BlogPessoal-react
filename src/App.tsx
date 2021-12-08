import React from "react";

import { Grid, Paper } from "@material-ui/core";
import Home from "./paginas/home/Home";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import cadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./componentes/temas/listatema/ListaTema";
import ListaPostagem from "./componentes/postagens/listapostagem/ListaPostagem";
function App() {
  return (
    //componente principal de rotas
    <Router>
      <Navbar />
      {/* dentro do switch vão as rotas que serão alteradas */}
      <Switch>
        <div style={{ minHeight: "100vh" }}>
          {/* Route tem o caminho da rota de cada componente */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cadastroUsuario">
           <CadastroUsuario/>
          </Route>
          <Route path="/temas">
           <ListaTema/>
          
          </Route>
          <Route path="/posts">
           <ListaPostagem/>
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
