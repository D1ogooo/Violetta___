import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import axios from 'axios'
import { Container, Header, Form, Input, ButtonConfirm, Logo } from './style'
import * as S from "../../../components/Componentes pertencentes ao Login/FormLogin/styled";
import LogoImage from '../../../assets/ghost 1.svg'

function PedidoChangePassword () {
 const [email, setEmail] = useState('')
 const [isErrorFirst, setIsErrorFirst] = useState(false)
 const navigate = useNavigate()
 
 function HandleEmail (event: React.ChangeEvent<HTMLInputElement>) {
  setEmail(event.target.value)
 }

 async function EmailInput (event: MouseEventHandler<HTMLButtonElement>) {
  event.preventDefault()
  await axios.get(`https://back-end-production-5622.up.railway.app/user/forget/password/${email}`,{})

  .then(() => {
   navigate('/recoverypassword')
  })
  .catch(() => {
   setIsErrorFirst(true)
  })
 }

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
   <Input type="email" placeholder="Insira o seu email..." onChange={HandleEmail}/>
   <ButtonConfirm type="submit" disabled={email.length < 1 || email.length < 1} onClick={EmailInput}>Enviar</ButtonConfirm>
   {isErrorFirst ? (
     <S.Notification_register>
      <S.Notification__body_register>
       <IoIosClose/> O email declarado é invalido
       </S.Notification__body_register>
      <S.Notification__progress_register></S.Notification__progress_register>
     </S.Notification_register>
    ) : null}
   </Form>
  </Container>
 </>
 )
}

export default PedidoChangePassword