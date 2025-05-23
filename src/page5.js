import logo from './Benet.webp';
import './App.css';

function Page5() {
  return (
    <>
      <p>Hola, soc John Caminant (des de Page5)</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Bottom Text</p>
      <a
        className="App-link"
        href="https://caminant.fandom.com/es/wiki/Benet_caminant"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clica aqui para que entre un virus
      </a>
      <a
        className="App-link"
        href="./pagina.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clica aqui para que no te entre un virus
      </a>
    </>
  );
}

export default Page5;
