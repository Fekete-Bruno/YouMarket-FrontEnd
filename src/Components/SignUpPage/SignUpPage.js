import Title from "../Title/Title.js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/axiosHandler.js";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  function sendSignUp(e) {
    e.preventDefault();
    if (form.password === form.confirm_password) {
      delete form.confirm_password;
      const promise = signUp(form);
      promise.then((res) => {
        console.log("FOI", res);
        navigate("/");
      });
      promise.catch(() =>
        alert("Algo está errado, verifique suas informações!")
      );
    } else {
      alert("Senha e confirmação de senha precisam ser iguais");
    }
  }
  return (
    <>
      <Title />
      <SignupScreenWrapper>
        <form onSubmit={sendSignUp}>
          <FormWrapper>
            <Info
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleForm}
              value={form.name}
              required
            />
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
            <Info
              type="password"
              placeholder="Confirme a senha"
              name="confirm_password"
              onChange={handleForm}
              value={form.confirm_password}
              required
            />

            <SubmitButton type="submit">Criar conta</SubmitButton>
          </FormWrapper>
        </form>
        <FormWrapper>
          <SpanLink>
            <Link to="/login">Já tem uma conta? Faça login!</Link>
          </SpanLink>
        </FormWrapper>
      </SignupScreenWrapper>
    </>
  );
}

const SignupScreenWrapper = styled.div`
  background-color: rgb(202, 210, 197);
  margin-top: 8vh;
  min-height: 100vh;
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
