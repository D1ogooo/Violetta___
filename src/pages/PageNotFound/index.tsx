import { Container, PaiContainer, Title, ButtonHome, LeftContent, RightContent } from './style'
import { PrimeiraColuna, SegundaColuna,CadeadoImg,RetangleImg, Paragraph } from './style'
import CadeadoImage from '../../pages/Home/assets/cadeado.svg'
import RetangleImage from '../../pages/Home/assets/Rectangle com borda branca que não estou com disposição para quebrar a cabeça para fazer porque estou nervososvg.svg'

function PageNotFound() {
  return (
   <>
    <Container>
     <PaiContainer>

     <RightContent>
     <PrimeiraColuna/>
     <SegundaColuna/>
      <CadeadoImg>
       <img src={CadeadoImage} />
      </CadeadoImg>
      <RetangleImg>
       <img src={RetangleImage} />
      </RetangleImg>
     </RightContent>

      <LeftContent>
      <Title>4 0 4</Title>
       <Paragraph>Página não encontrada...</Paragraph>
       <ButtonHome to="/">Retornar à home</ButtonHome>
      </LeftContent>
     </PaiContainer>
    </Container>
   </>
  )
}

export default PageNotFound