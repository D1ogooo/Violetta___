import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
`

export const Form = styled.form`
 h1 {
  margin-top: 12.5rem;
  margin-bottom: 0.2rem;
  color: #fff;
  text-align: center;
  font-family: 'Esteban';
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.3931rem;

  @media (max-width: 35.5rem){
   font-size: 2.625rem;
  }
 }

 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1.875rem;
 
@media (max-width: 35.5rem){
 input {
  width: 18rem;
 }
}
`

export const Logo = styled(Link)``

export const Input = styled.input`
 width: 27.0625rem;
 height: 3.6875rem;
 padding: 1.0625rem 1.4375rem;
 flex-shrink: 0;
 border-radius: 3.125rem;
 background-color: #404040;
 box-sizing: border-box;
 color: #fff;
 font-family: 'Esteban';
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.1062rem;
 border: none;

 &::placeholder {
 color: #fff;
 font-family: 'Esteban';
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.1062rem;
 opacity: 0.35;
 }
`

export const ButtonConfirm = styled.button`
 cursor: ${(props: any) => (props.disabled === true ? "not-allowed" : "pointer")};
 background-color: ${(props: any) => (props.disabled === true ? "#a79246" : "#c2a53c")};
 text-decoration: none;
 color: #000;
 font-family: 'Esteban';
 font-size: 1.25rem;
 border-radius: 3.125rem;
 text-align: center;
 padding-left: 3.75rem;
 padding-right: 3.75rem;
 padding-top: 1.25rem;
 padding-bottom: 1.25rem;

@media (max-width: 35.5rem){
 font-size: 1rem;
}
`

export const Header = styled.header`
 margin: 0.625rem;

 img {
  cursor: pointer;
  width: 2.9rem;
  height: 5.25rem;
 }
`