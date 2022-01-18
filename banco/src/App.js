import React from "react";
import Cabeçalho from "./components/Cabeçalho/Cabeçalho";
import Conta from "./components/Conta/Conta";
import Operações from "./components/Operaçoes/Operaçoes";
import Rodape from "./components/Rodape/Rodape";
import conta from "./data/conta"

import "./style.css";
function App() {


   const contaDoCabriel = conta("gabriel","111-222-333.4")


  

  return (

    <div className="app">
      <Cabeçalho />

      <main className="principal">
        <Conta conta={contaDoCabriel} />

        <div>
          <h2> Operações </h2>

          <Operações operação={contaDoCabriel.sacar}  texto="sacar" />
          <Operações operação={contaDoCabriel.depositar} texto={"depositar"} />
        </div>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
