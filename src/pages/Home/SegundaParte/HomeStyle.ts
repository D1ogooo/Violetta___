import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 margin-top: 18.625rem;
 justify-content: space-evenly;
 flex-wrap: wrap;
 gap: 3rem;

 @media (max-width: 48.0625rem){
  margin-top: -30.625rem;
 }
`

export const Title = styled.h1`
 margin-bottom: 4.0625rem;
 
 color: #FFF;
 text-align: right;
 font-family: Haettenschweiler;
 font-size: 8rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;

 @media (max-width: 62rem){
 display: flex;
 justify-content: center;
 font-size: 5rem;
 }

 @media (max-width: 35.5rem) {
 font-size: 4rem;
 }
`

export const PrimeiraColuna = styled.div`
 margin-top: -80px;
 position: absolute;
 background: #444; 
 width: 254px;
 height: 259px;
 flex-shrink: 0;

 @media (max-width: 939px){
  display: none;
 }
`

export const CadeadoImg = styled.div`
 margin-left: -90px;
 margin-top: 190px;
 
 img {
  position: absolute;
  width: 165.992px;
  height: 165.992px;
  flex-shrink: 0;
 }
`

export const RetangleImg = styled.div`
 margin-top: 310px;
 margin-left: 104px;

 img { 
  width: 77.743px;
  height: 80.545px;
  flex-shrink: 0;
 }
`

export const SegundaColuna = styled.div`
 margin-left: 150px;
 margin-top: 30px;
 background: #444; 
 width: 254px;
 height: 259px;
 flex-shrink: 0;
 img {
    width: 254px;
    height: 259px;
    border-radius: 8px;
  }

 @media (max-width: 62rem){
  display: none;
  margin-top: -1.875rem;
 }
`
export const LeftContainer = styled.div`
 display: flex;

 @media (max-width: 48.0625rem){
  img {
   display: none;
  }
 }
`

export const RightContainer = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 align-items: end;
 
 p {
  width: 580px;
  height: 167px;
  flex-shrink: 0;
  
  color: #FFF;
  text-align: right;
  font-family: Esteban;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.125px;
 }

 @media (max-width: 62rem){
 display: flex;
 justify-content: center;
 font-size: 5rem;
 }

 @media (max-width: 35.5rem) {
 font-size: 4rem;
 }
`
