import freeCodeCampLogo from './imagenes/logo.PNG'; // asegúrate de que la ruta del archivo sea correcta
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <div className='Aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          alt="FreeCodeCamp Logo"
          className='freecodecamp-logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
