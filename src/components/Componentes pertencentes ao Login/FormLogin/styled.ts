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
  font-family: Esteban;
  font-size: 20px;
  border-radius: 50px;
  text-align: center;
  padding-left: 66px;
  padding-right: 66px;
  padding-top: 20px;
  padding-bottom: 20px;
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
  gap: 30px;
`;

export const Titulo = styled.p`
  margin-bottom: 23px;
  color: #fff;
  text-align: center;
  font-family: Esteban;
  font-size: 74px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 6.29px;
  `;

export const Input = styled.input`
  width: 433px;
  height: 59px;
  padding: 17px 23px;
  flex-shrink: 0;
  border-radius: 50px;
  background-color: #404040;
  box-sizing: border-box;
  color: #fff;
  font-family: Esteban;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px;
  border: none;

  &::placeholder {
    color: #fff;
    font-family: Esteban;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.7px;
    opacity: 0.35;
  }
  `;


export const LinkTo = styled(Link)`
  color: #fff;
  text-align: center;
  font-family: Esteban;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px;
  text-decoration-line: underline;
  margin-top: 23px;
  `;

// Tentativa de informações do register
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
font-size: 18px;
margin: 10px;
position: absolute;
top: 0;
right: 0;
width: max-content;
border-radius: 6px;
background-color: #404040;
color: #bebdbdc5;
`

export const Notification__body_register = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 16px 8px;

 svg {
  width: 25px;
  height: 25px;
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
 left: 4px;
 bottom: 4px;
 width: calc(100% - 8px);
 height: 3px;
 transform: scaleX(0);
 transform-origin: left;
 background: linear-gradient(to right, #6d3fa2, #9f13ea);
 border-radius: inherit;
 animation: progress 2.5s 0.3s linear;
`
