import Title from "../Title/Title.js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { login } from "../../services/axiosHandler.js";
import UserContext from "../Context/UserContext.js";
import LoginContext from "../Context/LoginContext.js";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setToken } = useContext(LoginContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  function sendLogin(e) {
    e.preventDefault();
    const promise = login(form);
    promise
      .then((res) => {
        const {user,token} = res.data;
        setUser(user);
        setToken(token);
        localStorage.setItem("youmarket",JSON.stringify({user,token}));
        navigate("/");
      })
      .catch((res) => {
        alert("Algo está errado, verifique suas informações!");
      });
  }

  return (
    <>
      <Title />
      <LoginScreenWrapper>
        <form onSubmit={sendLogin}>
          <FormWrapper>
            <Info
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleForm}
              value={form.email}
              required
            />
            <Info
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleForm}
              value={form.password}
              required
            />

            <SubmitButton type="submit">Entrar</SubmitButton>
          </FormWrapper>
        </form>
        <FormWrapper>
          <SpanLink>
            <Link to="/signup">Novo por aqui? Cadastre-se!</Link>
          </SpanLink>
        </FormWrapper>
      </LoginScreenWrapper>
    </>
  );
}

const LoginScreenWrapper = styled.div`
  background-color: rgb(202, 210, 197);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const SpanLink = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: rgb(47, 62, 70);
  margin: 25px;
  text-decoration: none;
`;
