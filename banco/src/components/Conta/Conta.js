import "./style.css";
function Conta(props) {
  return (
    <div className="conta">
      <h2 className="conta__nome"> Fulano </h2>

      <p className="conta__cpf"> Cpf : <em>111222333</em> </p>

      <p className="conta__saldo"> saldo : <em> 1.0000 </em> </p>
    </div>
  );
}

export default Conta;
