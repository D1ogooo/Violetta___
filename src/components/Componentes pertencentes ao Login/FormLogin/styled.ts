import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
};

export const SubmitButton = styled.button<ButtonProps>`
  cursor: ${(props: any) => (props.disabled === true ? "not-allowed" : "pointer")};
  background-color: ${(props: any) => (props.disabled === true ? "#a79246" : "#c2a53c")};
  text-decoration: none;
  color: #000;
  font-family: 'Esteban';
  font-size: 20px;
  border-radius: 50px;
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
  padding-bottom: 20px;

 @media (max-width: 35.5rem){
  font-size: 1rem;
 }
`;

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  animation: fadein .3s forwards;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

 @media (max-width: 35.5rem){
  input {
   width: 18rem;
  }
 }
`;

export const Titulo = styled.p`
  margin-bottom: 1.4375rem;
  color: #fff;
  text-align: center;
  font-family: Esteban;
  font-size: 4.625rem;
  font-style: normal;
  font-weight: 400;BqcZIXQazmiuauvFVKvPbqZipbBMNZwGiuWpLFwFfRcgTgMXtfLQDgDLnNqDQQmJ
  line-height: normal;
  letter-spacing: 0.3931rem;

 @media (max-width: 35.5rem){
  font-size: 2.625rem;
 }
`;

export const Input = styled.input`
  width: 27.0625rem;
  height: 3.6875rem;
  padding: 1.0625rem 1.4375rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background-color: #404040;
  box-sizing: border-box;
  color: #fff;
  font-family: Esteban;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1062rem;
  border: none;

  &::placeholder {
    color: #fff;
    font-family: Esteban;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.1062rem;
    opacity: 0.35;
  }
`;

export const LinkTo = styled(Link)`
  color: #fff;
  text-align: center;
  font-family: 'Esteban';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1062rem;
  text-decoration-line: underline;
  margin-top: 1.4375rem;
  `;

export const Notification_register = styled.div`
@keyframes FadeIn {
5% {
  opacity: 1;
 visibility: visible;
 transform: translateY(0);
 }
  95% {
  opacity: 1;
  transform: translateY(0);
 }
}

font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 1.125rem;
margin: 0.625rem;
position: absolute;
top: 0;
right: 0;
width: max-content;
border-radius: 0.375rem;
background-color: #404040;
color: #bebdbdc5;
`

export const Notification__body_register = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 1rem 0.5rem;

 svg {
  width: 1.5625rem;
  height: 1.5625rem;
  color: #c52525;
 }
`

export const Notification__progress_register = styled.div`
 @keyframes progress {
  to {
    transform: scaleX(1);
  }
 }

 position: absolute;
 left: 0.25rem;
 bottom: 0.25rem;
 width: calc(100% - 0.5rem);
 height: 0.1875rem;
 transform: scaleX(0);
 transform-origin: left;
 background: linear-gradient(to right, #6d3fa2, #9f13ea);
 border-radius: inherit;
 animation: progress 2.5s 0.3s linear;
`
