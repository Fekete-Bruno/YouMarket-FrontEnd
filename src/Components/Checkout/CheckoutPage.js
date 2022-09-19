import Title from "../Title/Title.js";
import styled from "styled-components";
import MainMenu from "../MainMenu/MainMenu.js";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { getOrder, getCart, handleError } from "../../services/axiosHandler.js";
import UserContext from "../Context/UserContext";
import Unauthorized from "../Unauthorized/Unauthorized.js";

export default function CheckoutPage() {
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({});
  const { user } = useContext(UserContext);
  const location = useLocation();
  const total = location.state;

  useEffect(() => {
    const request = getOrder();
    request
      .then((res) => setOrder(res.data))
      .catch((err) => {
        handleError(err);
      });
  }, []);

  useEffect(() => {
    const request = getCart();
    request
      .then((res) => setCart(res.data.product))
      .catch((err) => {
        handleError(err);
      });
  }, []);

  return (
    <>
      <Title />
      <CheckoutScreenWrapper>
        <Content>
          {user ? (
            <>
              <Greeting>Pedido realizado com sucesso!</Greeting>
              <Overview>
                <Details>
                  <span>Detalhes da entrega</span>
                  <span>Nome</span>
                  <span>
                    {order.address} - {order.number}{" "}
                  </span>
                  <span>{order.cep} </span>
                  <span>{order.city}</span>
                  <span>{order.state}</span>
                </Details>
                <Details>
                  <span>Forma de pagamento</span>
                  {order.method === "credit" ? (
                    <span>Crédito</span>
                  ) : (
                    <span>Débito</span>
                  )}
                </Details>
                <Details>
                  <span>Resumo do pedido</span>
                  <span>{cart.title}</span>
                  <span>Total geral: {total} </span>
                </Details>
              </Overview>
            </>
          ) : (
            <Unauthorized />
          )}
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
