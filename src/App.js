import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p><p>En React la página index.js es la que renderiza todo el contenido html que hay en cada componente.
        </p>
        <p>Cada componente es una funcion que retorna código html</p>
        <p>Tambien existe el estado y las propiedades, que se pueden suar importando su libreria en la pagina, como en la pagina de Contador</p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
