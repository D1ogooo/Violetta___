import { PaiContainer, LeftContainer, RightContainer, Title } from './HomeStyle'
import { PrimeiraColuna, SegundaColuna, CadeadoImg, RetangleImg } from './HomeStyle'
import CadeadoImage from './assets/cadeado.svg'
import RetangleImage from './assets/Rectangle com borda branca que não estou com disposição para quebrar a cabeça para fazer porque estou nervososvg.svg'

export default function HomeSegunda() {
    return (
        <>
         
                <PaiContainer>
                    <LeftContainer>
                        <PrimeiraColuna/>
                        <SegundaColuna/>
                        <CadeadoImg>
                          <img src={CadeadoImage} />
                        </CadeadoImg>
                        <RetangleImg>
                          <img src={RetangleImage} />
                        </RetangleImg>
                    </LeftContainer>
                    <RightContainer>
                        <Title>COMPLETAMENTE <br></br>SEGURO E ANÔNIMO</Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </RightContainer>
                </PaiContainer>
            
        </>
    )
}
