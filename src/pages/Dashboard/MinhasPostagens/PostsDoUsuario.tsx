import { Logo } from '../../Home/PrimeiraParte/HomeStyle'
import { ButtonCriarPostagens, Container, Header, Image_Custom, LinePost, Links, TextPost, TitlePost, UsuarioPerfil } from './PostsStyle'
import { Card_True_Content, Card_NullContent, IdeiaImagem } from './PostsStyle'
import { Line } from './PostsStyle'
import { Posts } from './Data/PostsData'
import LogoImage from '../../../assets/ghost 1.svg'
import Logo_Link_Perfil from '../MinhasPostagens/assets/profile 1.svg'
import LineImage from './assets/Line 4.svg'
import IdeiaImage from './assets/thought-bubble-svgrepo-com 1.svg'
import Footer from '../../../components/Componentes pertencentes ao Login/Footer'

function PostsUsuario() {
    return (
        <>
            <Container>
                <Header>
                    <Logo>
                        <img src={LogoImage} />
                    </Logo>

                    <ul>
                        <li><Links to="#">Minhas Postagens</Links></li>
                        <Line>
                            <img src={LineImage} />
                        </Line>
                        <li><Links to="#">Outras Postagens</Links></li>
                    </ul>

                    <UsuarioPerfil to="#"><img src={Logo_Link_Perfil} /></UsuarioPerfil>
                </Header>

                <main>
                    <Container>
                        {Posts.length > 0 ? Posts.map((post, index) => (
                            <Card_True_Content key={index}>
                                <TitlePost>
                                    {post.title}
                                </TitlePost>
                                <LinePost />
                                <TextPost>
                                    {post.text}
                                </TextPost>
                                <Image_Custom>
                                    <img src={post.img} />
                                </Image_Custom>
                            </Card_True_Content>))
                            :
                            <Card_NullContent>
                                <IdeiaImagem>
                                    <img src={IdeiaImage} />
                                </IdeiaImagem>
                                <p>Ainda sem postagens...</p>
                                <ButtonCriarPostagens>
                                    CRIAR POSTAGEM
                                </ButtonCriarPostagens>
                            </Card_NullContent>}
                    </Container>
                </main>
            </Container>
            {Posts.length > 0 ? null : <Footer />}
        </>
    )
}

export default PostsUsuario
