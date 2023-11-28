import HomeSegunda from '../SegundaParte/HomeSegundaParte'
import HomeTerceira from '../TerceiraParte/HomeTerceiraParte'
import { PaiContainer, LeftContainer, Title, ButtonComecar, RightContainer, Container, Logo } from './HomeStyle'
import { PrimeiraColuna, SegundaColuna } from './HomeStyle'
import LogoImage from '../../../assets/ghost 1.svg'

function Home() {
    return (
        <>
            <Container>
                <PaiContainer>
                    <LeftContainer>
                        <Logo>
                            <img src={LogoImage}/>
                        </Logo>
                        <Title>SE EXPRESSE<br></br>SEM LIMITES</Title>
                        <ButtonComecar to="/login">Começar</ButtonComecar>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </LeftContainer>
                    <RightContainer>
                        <PrimeiraColuna>
                        </PrimeiraColuna>
                        <SegundaColuna>
                        </SegundaColuna>
                    </RightContainer>
                    <HomeSegunda />
                   <HomeTerceira />
                </PaiContainer>
            </Container>
        </>
    )
}

export default Home
