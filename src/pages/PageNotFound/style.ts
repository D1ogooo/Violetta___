import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
 display: flex;
 justify-content:  space-around;
`

export const Title = styled.h1`
 @font-face {
  font-family: 'Haettenschweiler';
  src: url('/Haettenschweiler Regular.ttf');
 }
 
 color: #FFF;
 font-family: 'Esteban';
 font-size: 8rem;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
 margin-top: 20.5rem;
 display: flex;

 @media screen and (min-width: 320px) and (max-width: 568px) {
  margin-top: -1rem;
 }

 @media screen and (min-width: 768px) and (max-width: 1024px) {
  margin-top: -8rem;
 }
`

export const PaiContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 gap: 5rem;
 justify-content: space-around;

 @media (max-width: 62.5rem) {
  flex-direction: column;
  margin-top: -18.5rem;
 }
`

export const ButtonHome = styled(Link)`
 text-decoration: none;
 font-family: "Plus Jakarta Sans", sans-serif;
 background-color: rgb(130, 52, 233);
 cursor: pointer;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: center;
 justify-content: center;
 border-radius: 0.3125rem;
 padding: 1rem;
 color: #fff;
 border: none;
 font-size: 1rem;
 font-weight: 700;
 width: 16.75rem;
 height: 3.125rem;
`

export const Paragraph = styled.p`
 color: green;
 text-align: start;
 font-family: 'Esteban';
 font-weight: 700;
 margin-bottom: 1rem;
`


export const CadeadoImg = styled.div`
 margin-left: -5.625rem;
 margin-top: 11.875rem;
 
 img {
  position: absolute;
  width: 10.3745rem;
  height: 10.3745rem;
  flex-shrink: 0;
 }

 @media (max-width: 768px) {
  img {
   margin-top: 15rem;
  }
 }

 @media (max-width: 1000px) {
  display: none;
 }
`

export const RetangleImg = styled.div`
 margin-top: 19.375rem;
 margin-left: 6.5rem;

 img { 
  width: 4.8589rem;
  height: 5.0341rem;
  flex-shrink: 0;
 }

 @media (max-width: 768px) {
  img {
   position: absolute;
   margin-top: 12.5rem; 
  }
 }

 @media (max-width: 62.5rem) {
  display: none;
 }
`

export const PrimeiraColuna = styled.div`
 margin-top: -5rem;
 position: absolute;
 background: #444; 
 width: 15.875rem;
 height: 259px;
 flex-shrink: 0;

 @media (max-width: 62.5rem){
  display: none;
 }
`

export const SegundaColuna = styled.div`
 margin-left: 9.375rem;
 margin-top: 1.875rem;
 background: #444; 
 width: 15.875rem;
 height: 16.1875rem;
 flex-shrink: 0;
  img {
   width: 15.875rem;
   height: 16.1875rem;
   border-radius: 0.5rem;
  }

  @media (max-width: 62.5rem){
  display: none;
 }
`

export const RightContent = styled.div`
 display: flex;
 margin-top: 20.5rem;
 
 @media (max-width: 62.5rem) {
  
 }
`

export const LeftContent = styled.div`
 @media (max-width: 1048px) {
  margin-top: -1.25rem;
 }
`

