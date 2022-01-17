import React from "react";
import Cabeçalho from "./components/Cabeçalho/Cabeçalho";
import Conta from "./components/Conta/Conta";
import Operações from "./components/Operaçoes/Operaçoes";
import Rodape from "./components/Rodape/Rodape";
import "./style.css";
function App() {
  return (
    <div className="app">
      <Cabeçalho />

      <main className="principal">
        <Conta />

        <div>
          <h2> Operações </h2>

          <Operações />
          <Operações />
        </div>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
