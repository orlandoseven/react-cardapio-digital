import './App.css'
import{useState} from 'react';
import hashtauranteImg from "./assets/hashtaurante.webp";
import Navegacao from './components/navegacao/Navegacao';
import Cards from './components/cards/Cards';

function App() {
const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  return (
    <div className='container'>
      <div className='banner'>
      <img src={hashtauranteImg} alt='Imagem mesas em um restaurante' className='capa'/>
      </div>
      <Navegacao
      categoriaSelecionada={categoriaSelecionada}
      setCategoriaSelecionada={setCategoriaSelecionada}
      />

     <Cards 
     categoriaSelecionada={categoriaSelecionada}
     />
    </div>
  )
}

export default App
