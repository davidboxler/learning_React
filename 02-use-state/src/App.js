import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponente1 } from './components/EjercicioComponente1';

function App() {

  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado de React - Hook useState</h1>
        <MiPrimerEstado />
        <EjercicioComponente1 year={yearActual} />
      </header>
    </div>
  );
}

export default App;
