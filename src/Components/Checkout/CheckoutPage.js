import Title from "../Title/Title.js";
import styled from "styled-components";
import MainMenu from "../MainMenu/MainMenu.js";

export default function CheckoutPage() {
  return (
    <>
      <Title />
      <CheckoutScreenWrapper>
        <Content>
          <Greeting>Pedido realizado com sucesso!</Greeting>
          <Overview>
            <Details>
              <span>Detalhes da entrega</span>
              <span>Nome</span>
              <span>Endereço - rua - numero </span>
              <span>Bairro </span>
              <span>Cidade</span>
            </Details>
            <Details>
              <span>Forma de pagamento</span>
              <span>Crédito</span>
              <span>Em 3x de 29,99 </span>
            </Details>
            <Details>
              <span>Resumo do pedido</span>
              <span>Nome do produto</span>
              <span>Total geral: R$ 89,97 </span>
            </Details>
          </Overview>
        </Content>
        <MainMenu />
      </CheckoutScreenWrapper>
    </>
  );
}

const CheckoutScreenWrapper = styled.div`
  background-color: rgb(202, 210, 197);
  margin-top: 8vh;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8vh 0;
`;

const Greeting = styled.div`
  display: flex;
  align-items: center;
  font-size: 4vh;
  color: rgb(47, 62, 70);
  margin: 2vh 2vh;
`;

const Overview = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  margin: 2vh 2vh;
  justify-content: space-around;
  align-items: center;
  border: 1px #ddd solid;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vh 1vh;
`;
