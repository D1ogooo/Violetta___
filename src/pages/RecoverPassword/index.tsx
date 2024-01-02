import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Container, Header, Form, Input, ButtonConfirm, Logo } from './style'
import LogoImage from '../../assets/ghost 1.svg';

function RecuperarSenha() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [thirdInput, setThirdInput] = useState("")
  const navigate = useNavigate()

  function FirstInput (event: React.ChangeEvent<HTMLInputElement>) {
   setFirstInput(event.target.value);
  }

  function SecondInput (event: React.ChangeEvent<HTMLInputElement>) {
   setSecondInput(event.target.value);
  }

  function ThirdInput(event: React.ChangeEvent<HTMLInputElement>) {
   setThirdInput(event.target.value)
  }

  const resetPasswordFunction: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
   event.preventDefault();
 
   await axios.get(`https://back-end-production-5622.up.railway.app/user/change/password`,{
    "code": `${thirdInput}`,
    "password": `${firstInput}`,
    "passwordConfirmation": `${secondInput}`,
   })
   .then(() => {
     navigate('/')
    })
    .catch(() => {
    })
   };

  return (
   <>
    <Container>
    <Header>
     <Logo to='/'>
      <img src={LogoImage} alt="Logo" />
     </Logo>
    </Header>

      <Form>
       <h1>Recuperar Senha</h1>
       <Input type="text" placeholder="Código de verificação" onChange={ThirdInput}/>
       <Input type="password" placeholder="Nova senha" id="first_password" onChange={FirstInput}/>
       <Input type="password" placeholder="Confirme sua senha" id="second_password" onChange={SecondInput}/>
       <ButtonConfirm type="submit" disabled={firstInput.length < 1 || secondInput.length < 1} onClick={resetPasswordFunction}>Enviar</ButtonConfirm>
      </Form>
    </Container>
   </>
  )
}

export default RecuperarSenha