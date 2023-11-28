import PostsUsuario from './pages/Dashboard/MinhasPostagens/PostsDoUsuario'
import MeusLikes from './pages/Dashboard/MeusDados/MeusLikesPerfil' 
import Home from './pages/Home/PrimeiraParte/HomePage'
import Login from './pages/Login'
import TokenAuthenticate from './pages/TokenAuthenticate/index'
import Register from './pages/Register'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
{
 path: "/",
 element: <Home/>,
},
{
 path: '/login',
 element: <Login />,
},
{
 path: "/register",
 element: <Register />,
},
{
 path: "/authToken",
 element: <TokenAuthenticate />,
},
{
 path: "/dashboard", // Sei que está errado, porem ainda não temos banco
 element: <PostsUsuario /> // vai fica assim por enquanto
},
])

export default router