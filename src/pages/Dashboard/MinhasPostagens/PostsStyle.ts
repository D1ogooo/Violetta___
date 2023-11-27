import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
 margin: 0 auto;
 margin-top: 2rem;
 margin-bottom: 13.75rem;
 width: 90%;
`

export const UsuarioPerfil = styled(Link)`
 img {
  width: 90px;
  height: 85px;
  flex-shrink: 0;
 }
`

export const Card_NullContent = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;

 img {
  
 }

 p {
  color: #FFF;
  opacity: 0.5;
  text-align: center;
  font-family: Esteban;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.825px;
 }
`

export const IdeiaImagem = styled.div`
 img {
   width: 220px;
   height: 220px;
   flex-shrink: 0;
 }
`

export const ButtonCriarPostagens = styled.button`
 color: #000;
 width: 251px;
 height: 69px;
 flex-shrink: 0;
 cursor: pointer;
 margin: 20px;

 text-align: center;
 font-family: Esteban;
 font-size: 20px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 1.7px;

 border-radius: 50px;
 border: 1px solid #000;
 background: #F1D261;
`

export const Line = styled.p`
 width: 54.781px;
 height: 0px;
 background: #FFF;
 margin-left: 50px;
 margin-right: 14px;
 margin-top: 8px;
`

export const Header = styled.header`
 display: flex;
 justify-content: space-between;
 margin-top: -20px;
 li{
    list-style: none;
    margin-top: 20px;
 }

 ul {
    display: flex;
 }
`

export const Links = styled(Link)`
 text-decoration: none;
 color: #FFF;
 font-family: Esteban;
 font-size: 20px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 1.7px;
`

// Components do post
export const Card_True_Content = styled.div`
 width: 880px;
 height: 490px;
 margin: 0 auto;
 background: #444;
 flex-shrink: 0;
 padding: 20px;
`

export const TitlePost = styled.h1`
  @font-face {
    font-family: Haettenschweiler;
    src: url('/Haettenschweiler Regular.ttf');
 }

 color: #FFF;
 text-align: start;
 font-family: Haettenschweiler;
 font-size: 50px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 4.25px;
`

export const TextPost = styled.p`
 
`

export const Image_Custom = styled.div`
 
`

export const LinePost = styled.hr`
 width: 100%;
`
    
