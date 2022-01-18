import { useEffect, useState } from "react";
import "./style.css";
function Conta(props) {

  
  const [cpf,setCpf] =useState(props.conta.infoConta.cpf)
  const [nome,setNome] = useState ( props.conta.infoConta.nome)
  const [saldo , setSaldo] = useState ( props.conta.infoConta.saldo ) 
  const [a,setA] = useState(1)
  useEffect((
  )=>{

    props.conta.increver(atualizar)

  })


  function atualizar (infoConta){
      setSaldo(infoConta)
  }






  return (
    <div className="conta">
      <span> numero de vez que foi atualizado { a }</span> 
      <h2 className="conta__nome"> {nome} </h2>

      <p className="conta__cpf"> Cpf : <em>{cpf}</em> </p>

      <p className="conta__saldo"> saldo : <em>{saldo}</em> </p>
    </div>
  );
}

export default Conta;
