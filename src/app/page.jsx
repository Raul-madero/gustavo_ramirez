import '../sass/app.scss';
import Header from './component/Header'
import Jumbotron from './component/Jumbotron';
import Descripciones from './component/Descripciones';
import Resumen from './component/Resumen';
import ServiciosCards from './component/ServiciosCards';
import Temas from './component/Temas';
import Footer from './component/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <Jumbotron/>
      <Descripciones/>
      <Resumen/>
      <ServiciosCards />
      <Temas />
      <Footer />
    </>
  )
}
