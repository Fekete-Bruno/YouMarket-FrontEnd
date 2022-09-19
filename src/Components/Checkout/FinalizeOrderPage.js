import Title from "../Title/Title.js";
import styled from "styled-components";
import MainMenu from "../MainMenu/MainMenu.js";
import { useState, useContext } from "react";
import { postOrder } from "../../services/axiosHandler.js";
import UserContext from "../Context/UserContext";
import Unauthorized from "../Unauthorized/Unauthorized";
import { useNavigate, useLocation } from "react-router-dom";

export default function FinalizeOrderPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    address: "",
    number: "",
    cep: "",
    city: "",
    state: "",
    method: "",
    card_number: "",
    cvc: "",
  });
  const location = useLocation();
  const total = location.state;

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  function sendOrder(e) {
    e.preventDefault();
    const promise = postOrder(form);
    promise
      .then((res) => {
        navigate("/checkout", { state: total });
      })
      .catch((res) => {
        alert("Algo está errado, verifique suas informações!");
      });
  }

  return (
    <>
      <Title />
      <CheckoutScreenWrapper>
        <Content>
          <Title />
          {user ? (
            <>
              <form onSubmit={sendOrder}>
                <FormWrapper>
                  <span>Dados para entrega</span>
                  <Info
                    type="text"
                    placeholder="Endereço"
                    name="address"
                    onChange={handleForm}
                    value={form.address}
                    required
                  />
                  <Info
                    type="text"
                    placeholder="Número"
                    name="number"
                    onChange={handleForm}
                    value={form.number}
                    required
                  />
                  <Info
                    type="text"
                    placeholder="CEP"
                    name="cep"
                    onChange={handleForm}
                    value={form.cep}
                    required
                  />

                  <Info
                    type="text"
                    placeholder="Cidade"
                    name="city"
                    onChange={handleForm}
                    value={form.city}
                    required
                  />
                  <Info
                    type="text"
                    placeholder="Estado"
                    name="state"
                    onChange={handleForm}
                    value={form.state}
                    required
                  />
                </FormWrapper>
                <FormWrapper>
                  <span>Método de pagamento</span>
                  <SelectMethod name="method" onChange={handleForm}>
                    <option value="credit">Crédito</option>
                    <option value="debit">Débito</option>
                  </SelectMethod>

                  <Info
                    type="text"
                    placeholder="Número do cartão"
                    name="card_number"
                    onChange={handleForm}
                    value={form.card_number}
                    required
                  />
                  <Info
                    type="text"
                    placeholder="CVC"
                    name="cvc"
                    onChange={handleForm}
                    value={form.cvc}
                    required
                  />
                  <SubmitButton type="submit">Finalizar pedido</SubmitButton>
                </FormWrapper>
              </form>
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px #ddd solid;
  padding: 20px 26px;
`;

const Info = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: black;
    padding-left: 10px;
  }
`;
const SubmitButton = styled.button`
  width: 303px;
  height: 45px;
  background-color: rgb(47, 62, 70);
  border-radius: 4.63636px;

  font-style: normal;
  font-weight: 700;
  font-size: 20.976px;
  color: rgb(202, 210, 197);
  border: none;
  margin-top: 5px;
`;

const SelectMethod = styled.select`
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px;
  padding-left: 10px;
`;
