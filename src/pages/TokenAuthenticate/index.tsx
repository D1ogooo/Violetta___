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
    const token = inputValue;
  
    try {
      const res = await axios.post(`https://back-end-production-5622.up.railway.app/user/active/${token}`);
      
      if (res.data.status === 200) {
        navigate('/dashboard');
      } else {
        null
      }
    } catch (error) {
      console.log(error);
    }
  };

  function resTeste() {
    navigate('/')
  }

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
             <ButtonSubmit type="submit" disabled={inputValue.length < 1} onClick={resTeste}>
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