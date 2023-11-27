import styled from "styled-components";

export const PaiContainer = styled.div`
 display: flex;
 gap: 6%;
`

export const Container = styled.div`
 margin: 0 auto;
 width: 90%;
 margin-top: 18rem;
 margin-bottom: 17.4375rem;
`

export const Title = styled.h1`
 width: 759px;
 color: #FFF;
 font-family: Haettenschweiler;
 font-size: 128px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
`

export const LeftContainer = styled.div`
 p {
   width: 556px;
   height: 167px;
   flex-shrink: 0;
   margin-bottom: 40px;
   margin-top: 10px;
    
  color: #FFF;
  font-family: Esteban;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.125px;
 }
`

export const RightContainer = styled.div`
 display: flex;
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
 
 animation: anim 3.9s infinite;
 transition: 0.5s all;

 box-shadow: 0px 14px 33px 4px rgba(0,0,0,0.33);
 width: 267px;
 height: 477px;
 flex-shrink: 0;
 background-color: #444444;
 position: absolute;
 margin-left: -48px;
 border-radius: 8px;

  img {
   width: 267px;
   height: 477px;
   border-radius: 8px;
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

 box-shadow: 0px 14px 33px 4px rgba(0,0,0,0.33);
 width: 267px;
 height: 477px;
 flex-shrink: 0;
 background-color: #444444;
 position: absolute;
 margin-top: 80px;
 margin-left: 255px;
 border-radius: 8px;
 animation: anim 3.9s infinite;
 transition: 0.5s all;

 position: absolute;
 img {
  width: 267px;
  height: 477px;
  border-radius: 8px;
 }
`

export const PrimeiroCoracao = styled.div`
 img {
  width: 177px;
  height: 177px;
  flex-shrink: 0;
  margin-left: 135px;
  margin-top: -90px;
  transition: 0.5s all;
 }
`

export const SegundoCoracao = styled.div`
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

 img {
  width: 177px;
  height: 177px;
  flex-shrink: 0;
  margin-top: 475px;
  margin-left: 110px;
  transition: 0.5s all;
 }
`