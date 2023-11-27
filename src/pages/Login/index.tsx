import FormLogin from "../../components/Componentes pertencentes ao Login/FormLogin";
import Footer from "../../components/Componentes pertencentes ao Login/Footer";
import Header from "../../components/Componentes pertencentes ao Login/Header";
import { GlobalStyle } from "./styled";

export default function Login() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FormLogin />
      <Footer />
    </>
  );
}
