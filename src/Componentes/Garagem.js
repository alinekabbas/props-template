//Exercicio 2
//Agora vamos mexer nos Carros da Garagem
//Em nosso componente Garagem, vamos criar props para os componentes de Carro que criamos da última aula. 
// a cor;
// o ano;
// um texto dizendo se o carro é ou não flex;
// Utilize uma string para a cor, um number para o ano, e um boolean para dizer se é ou não flex.

import Carro from "./Carro";

function Garagem(props) {

  return (
    <div>
      <h1>Garagem da {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Mensagem</button>
      <Carro
        cor={"Vermelho"}
        ano={2022}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Verde"}
        ano={2020}
        flex={"false"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Rosa"}
        ano={2022}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Azul"}
        ano={2021}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Preto"}
        ano={2018}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Prata"}
        ano={2016}
        flex={"false"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Branco"}
        ano={2019}
        flex={"true"}
        adicionadoPor={props.nome}
      />
    </div>
  );
}

export default Garagem;

