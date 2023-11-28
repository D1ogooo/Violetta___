import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from "./styled";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function LoginSubmit() {
    try {
      const response = await axios.post('https://back-end-production-5622.up.railway.app/user/auth', {
        email,
        password,
      });

      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  }

  function HandleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function HandlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <S.ContainerPai>
      <S.Titulo>LOGIN</S.Titulo>
      <S.FormContainer>
        <S.Input value={email} type="email" onChange={HandleEmail} placeholder='Insira o seu email...' />
        <S.Input value={password} type='password' onChange={HandlePassword} placeholder='Insira a sua senha... ' />
        <S.SubmitButton type='button' onClick={LoginSubmit} disabled={password.length > 10 || password.length === 0}>
          ENTRAR
        </S.SubmitButton>
      </S.FormContainer>
      <S.LinkTo to="/register">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  );
}
