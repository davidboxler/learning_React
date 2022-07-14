import "./App.css";
import { EventoComponente } from "./EventoComponente";
import MiPrimerComponente from "./MiPrimerComponente";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";

function App() {

  const ficha_medica = {
    altura: '187cm',
    grupo: 'H+',
    estado: 'bueno',
    alergias: 'todas'
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenido a React</p>
        <div className="componentes">
          <EventoComponente />
          <hr />
          <TercerComponente ficha={ficha_medica} />
          <hr />
          <MiPrimerComponente />
          <hr />
          <SegundoComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
