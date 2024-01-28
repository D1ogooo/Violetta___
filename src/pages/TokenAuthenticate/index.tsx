import { useState } from 'react';
import { Header } from './style';
import { Container, Internal, Component, ButtonSubmit } from './style';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LogoImage from '../../assets/ghost 1.svg';

function TokenAuthenticate() {
  const [inputValue, setinputValue] = useState("")
  const navigate = useNavigate();

  function HandleInput (event: React.ChangeEvent<HTMLInputElement>) {
    setinputValue(event.target.value);
  }

   const Token: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
  
    try {
      let token = inputValue;
      await axios.);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <img src={LogoImage} alt="Logo" />
        </Header>

        <Component>
          <Internal>
            <h1>Insira o seu token de autenticação</h1>
            <form>
             <input type="text" id="text" placeholder='Seu token de verificação' onChange={HandleInput} />
             <ButtonSubmit type="submit" disabled={inputValue.length < 1} onClick={Token}>
              Verificar
             </ButtonSubmit>
            </form>
          </Internal>
        </Component>
      </Container>
    </>
  );
 }


export default TokenAuthenticate;
