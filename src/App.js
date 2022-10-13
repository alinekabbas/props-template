//Exercicio 1
//Vamos seguir com nosso exemplo da garagem, visto na aula de Componentes.
//Em nosso componente principal, no App, vamos criar uma prop nome. Esta prop deve ter o seu nome como valor. Altere o componente Garagem para que agora seu nome seja passado por props, ao invés de ser escrito diretamente no elemento HTML.

import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome1 = "Aline"
  function apresentaGaragem1(){
    alert(`Boas vindas à garagem de ${nome1}`)
  }
  const nome2 = "Girgis"
  function apresentaGaragem2(){
    alert(`Boas vindas à garagem de ${nome2}`)
  }
  return (
    <div className="App">
      <Garagem nome={nome1} mensagemApresentacao = {apresentaGaragem1}/>
      <Garagem nome={nome2} mensagemApresentacao = {apresentaGaragem2}/>
    </div>
  );
}


