import logo from './Benet.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola, soc John Caminant
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bottom Text
        </p>
        <a
          className="App-link"
          href="https://caminant.fandom.com/es/wiki/Benet_caminant"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clica aqui para que entre un virus
        </a>
      </header>
    </div>
  );
}

export default App;
