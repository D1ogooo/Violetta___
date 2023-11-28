import Footer from '../../../components/Componentes pertencentes ao Login/Footer'
import { ButtonComecar } from '../PrimeiraParte/HomeStyle'
import { PrimeiraColuna, SegundaColuna, PrimeiroCoracao, SegundoCoracao } from './HomeStyle'
import { LeftContainer, RightContainer, PaiContainer, Title } from './HomeStyle'
import CoracaoImage from '../SegundaParte/assets/heart-svgrepo-com 1.svg'
import SegundoCoracaoImage from '../SegundaParte/assets/heart-svgrepo-com 2.svg'

function HomeTerceira() {
    return (
        <>
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
                        </PrimeiraColuna>
                        <PrimeiroCoracao>
                         <img src={CoracaoImage} />
                        </PrimeiroCoracao>
                        <SegundaColuna>
                        </SegundaColuna>
                        <SegundoCoracao>
                         <img src={SegundoCoracaoImage} />
                        </SegundoCoracao>
                    </RightContainer>
                </PaiContainer>
            <Footer />
        </>
    )
}

export default HomeTerceira
