import Footer from '../../../components/Componentes pertencentes ao Login/Footer'
import { ButtonComecar } from '../PrimeiraParte/HomeStyle'
import { PrimeiraColuna, SegundaColuna, PrimeiroCoracao, SegundoCoracao } from './HomeStyle'
import { LeftContainer, RightContainer, PaiContainer, Title } from './HomeStyle'
import { Container } from './HomeStyle'
import CoracaoImage from '../SegundaParte/assets/heart-svgrepo-com 1.svg'
import SegundoCoracaoImage from '../SegundaParte/assets/heart-svgrepo-com 2.svg'
import FirstImage from '../../../assets/Images/DreamShaper_v7_ANIME_STYLE_friends_on_a_park_playing_around_wi_1.jpg'
import SecondImage from '../../../assets/Images/DreamShaper_v7_ANIME_STYLE_friends_on_a_park_playing_around_wi_0.jpg'

function HomeTerceira() {
    return (
        <>
            <Container>
                <PaiContainer>
                    <LeftContainer>
                        <Title>SE IDENTIFIQUE <br />
                            COM OS OUTROS</Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                        <ButtonComecar to="/login">Começar</ButtonComecar>
                    </LeftContainer>
                    <RightContainer>
                        <PrimeiraColuna>
                            <img src={FirstImage}/>
                        </PrimeiraColuna>
                        <PrimeiroCoracao>
                            <img src={CoracaoImage} />
                        </PrimeiroCoracao>
                        <SegundaColuna>
                            <img src={SecondImage} />
                        </SegundaColuna>
                        <SegundoCoracao>
                            <img src={SegundoCoracaoImage} />
                        </SegundoCoracao>
                    </RightContainer>
                </PaiContainer>

            </Container>
            <Footer />
        </>
    )
}

export default HomeTerceira