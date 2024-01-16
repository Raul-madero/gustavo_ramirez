import Jumbotron from './components/main/Jumbotron';
import Descripciones from './components/main/Descripciones';
import Resumen from './components/main/Resumen';
import ServiciosCards from './components/main/ServiciosCards';
import Temas from './components/main/Temas';

export default function Home({children}) {
  return (
    <>
      <Jumbotron/>
      <Descripciones/>
      <Resumen/>
      <ServiciosCards />
      <Temas />
    </>
  )
}
