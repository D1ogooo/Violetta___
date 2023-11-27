import { useState } from "react";
import axios from "axios";
import * as S from "./styled";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function LoginSubmit () {
    axios.post('', {
     "email": `${email}`,
     "password": `${password}`,
    })

    .then(function (response) {
     console.log(response);
    })

    .catch(function (error) {
     console.log(error);
    });
  }

  function HandleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function HandlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <S.ContainerPai>
      <S.Titulo>LOGIN</S.Titulo>
      <S.FormContainer onSubmit={HandleSubmit}>
        <S.Input value={email} type="email" onChange={HandleEmail} placeholder='Insira o seu email...' />
        <S.Input value={password} type='password' onChange={HandlePassword} placeholder='Insira a sua senha... ' />
        <S.SubmitButton type='submit' onClick={LoginSubmit} disabled={password.length > 10 || password.length === 0}>
          ENTRAR
        </S.SubmitButton>
      </S.FormContainer>
      <S.LinkTo to="/register">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  );
}
