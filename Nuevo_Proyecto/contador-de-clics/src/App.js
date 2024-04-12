import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import imagenUno from './imagenes/imagen.jpg'
//Hook-->importado desde react
import { useState } from 'react';

function App() {

  const[numClics, setNumClics] = useState(0);


  const manejarCLic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={imagenUno}
        alt='logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}  />
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarCLic={manejarCLic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarCLic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
