import styled from 'styled-components'

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
`

export const Header = styled.header`
 margin: 0.625rem;

 img {
  width: 2.9rem;
  height: 5.25rem;
 }
`

export const Component = styled.div`
 text-align: center;
 margin-top: 6.25rem;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;

 form {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input {
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

   &:focus {
    outline: none;
    border-color: #007bff;
   }
  }
 }
`

interface ButtonSubmitProps {
  disabled?: boolean;
}

export const ButtonSubmit = styled.button<ButtonSubmitProps>`
 cursor: ${(props: any) => (props.disabled === true ? "not-allowed" : "pointer")};
 background-color: ${(props: any) => (props.disabled === true ? "#a79246" : "#c2a53c")};
 text-decoration: none;
 color: #000;
 font-weight: 500;
 font-family: Esteban;
 font-size: 1.3125rem;
 border-radius: 3.125rem;
 text-align: center;
 padding-left: 4.125rem;
 padding-right: 4.125rem;
 padding-top: 1.25rem;
 padding-bottom: 1.25rem;
 margin-top: .8rem;
`

export const Internal = styled.div`
 h1 {
  color: #FFF;
  font-family: 'Esteban';
  margin-top: 20rem;
  margin-bottom: 1rem;
 }
`