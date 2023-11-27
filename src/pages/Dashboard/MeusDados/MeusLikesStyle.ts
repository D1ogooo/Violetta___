import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 justify-content: center;
 gap: 20rem;
`

export const SecondLinks = styled(Link)`
 color: #FFF;
 font-family: Esteban;
 text-decoration: none;
 font-size: 2rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.17rem;
`

export const LeftContainer = styled.div`
 
 ul {
  display: flex;
  flex-direction: column;
 }

 li {
  list-style: none;
 }
`

//Esse recebe as informações do map

export const TitleCard = styled.h2`
  @font-face {
    font-family: Haettenschweiler;
    src: url('/Haettenschweiler Regular.ttf');
 }
 
 color: #FFF;
 text-align: start;
 font-family: Haettenschweiler;
 margin-bottom: 0.25rem;
 font-size: 2rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.17rem;
`

export const ParagraphCard = styled.p`
 width: 29.6875rem;
 height: 5.3125rem;
 flex-shrink: 0;
 color: #FFF;
 font-family: Esteban;
 font-size: 0.9375rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.07969rem;
`

export const FullContent = styled.div`
 
`

export const CardContent = styled.div`
 
`

export const InternalCard = styled.div`
 
`

export const RightContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

//Caso o card não receba nada
export const NullContent = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const ButtoVerPostagens = styled(Link)`
 width: 15.6875rem;
 height: 4.3125rem;
 flex-shrink: 0;
 border-radius: 3.125rem;
 border: 1px solid #000;
 background: #F1D261;
 text-decoration: none;
 color: #000;
 text-align: center;
 padding: 19px;

 font-family: Esteban;
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.10625rem;
`

export const TitleNullContent = styled.h2`
 width: 43.75rem;
 margin-bottom: 15px;
 color: #FFF;
 text-align: center;
 
 font-family: Esteban;
 font-size: 2.8125rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.23906rem;
 opacity: 0.5;
`