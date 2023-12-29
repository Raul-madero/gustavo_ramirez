import '../sass/app.scss';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron';
import Descripciones from './components/Descripciones';
import Resumen from './components/Resumen';
import ServiciosCards from './components/ServiciosCards';
import Temas from './components/Temas';
import Footer from './components/Footer';

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
