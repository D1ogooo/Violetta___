import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 width: 90%;
 margin: 0 auto;
 flex-wrap: wrap;

 @media (max-width: 48.0625rem) {
    
 }
`

export const Container = styled.div`
 margin-top: 1rem;
`

export const LeftContainer = styled.div`
 p {
  color: #FFF;
  font-family: 'Esteban';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.13281rem;
  height: 10.4375rem;
  margin-top: 3.44rem;
  margin-bottom: 10rem;
  line-height: 150%;
  width: 34rem;
  flex-wrap: wrap;
 }

 @media (max-width: 48.0625rem){
  width: 50rem;

  p {
   margin: 0 auto;
   text-align: center;
   max-width: 41.2rem;
   min-width: 20.2rem;
  }
 }

 @media (max-width: 35.5rem){
  width: 50rem;

  p {
   text-align: center;
   margin: 0 auto;
   width: 20rem;
  }
 }
`

export const RightContainer = styled.div`
 img {
  max-width: 15.625rem;
  min-width: 12.5rem;
  height: 24.375rem;
  flex-shrink: 0;
 }
  display: flex;
  gap: .8rem;

 @media (max-width: 48.0625rem){
  gap: .5rem;
  margin: 0 auto;
   
  height: 29.8125rem;
  flex-shrink: 0;
 }
`

export const PrimeiraColuna = styled.div`
 @keyframes anim {
  0% {
    transform: translateY(0.875rem);
  }

  50% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(0.875rem);
  }
 }

  box-shadow: 0px 0.875rem 2.0625rem 0.25rem rgba(0,0,0,0.33);
  max-width: 15.625rem;
  min-width: 12.5rem;
  max-height: 18.75rem;
  min-height: 15.625rem;

  flex-shrink: 0;
  background: #444;
  border-radius: 0.5rem;
  animation: anim 3.9s infinite;
  transition: 0.5s all;
 
  img {
    border-radius: 0.5rem;
  }

  @media (max-width: 48.0625rem) {
    display: none;
  }
`
export const SegundaColuna = styled.div`
 @keyframes anim {
  0% {
    transform: translateY(0.875rem);
  }

  50% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(0.875rem);
   }
 }

 box-shadow: 0px 0.875rem 2.0625rem 0.25rem rgba(0,0,0,0.33);
 
 max-width: 15.625rem;
 min-width: 12.5rem;
 max-height: 16.25rem;
 min-height: 12.5rem;

 flex-shrink: 0;
 margin-top: -5rem;
 background: #444;
 border-radius: 0.5rem;
 animation: anim 3.9s infinite;
 transition: 0.5s all;

 img {
    border-radius: 0.5rem;
  }

  @media (max-width: 48.0625rem) {
    display: none;
  }
`

export const Title = styled.h1`
 @font-face {
  font-family: 'Haettenschweiler';
  src: url('/Haettenschweiler Regular.ttf');
 }
 
 color: #FFF;
 font-family: 'Haettenschweiler';
 font-size: 8rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 margin-bottom: 2.0625rem;

 @media (max-width: 62rem){
 display: flex;
 justify-content: center;
 font-size: 5rem;
 margin-top: 1.25rem;
 }

 @media (max-width: 35.5rem) {
 font-size: 4rem;
 }
`

export const ButtonComecar = styled(Link)`
 text-decoration: none;
 color: #000;
 font-family: 'Esteban';
 font-size: 1.25rem;
 
 border-radius: 3.125rem;
 background: #F1D261;
 text-align: center;
 padding-left: 4.125rem;
 padding-right: 4.125rem;
 padding-top: 1.25rem;
 padding-bottom: 1.25rem;

 @media (max-width: 62.5rem) {
  display: flex;
  justify-content: center;
 }

 @media (max-width: 48.0625rem) {
  width: 23.75rem;
  height: 3.75rem;
  margin: 0 auto;
  margin-bottom: 1.2rem;
 }

 @media (max-width: 35.5rem) {
  width: 17.75rem;
  height: 3.75rem;
  margin-bottom: 1.2rem;
 }
`

export const Logo = styled.div`
 img {
  max-width: 1.5rem;
  min-width: 2.9rem;
  height: 5.25rem;
 }
 margin-bottom: 8.875rem;

 @media (max-width: 35.5rem) {
 margin-bottom: 2.875rem;
 display: flex;
 justify-content: center;
 }
`