import './styles/App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Formulario from './components/formulario';

function App() {
  return (
    <div className="App">
      <div className="principal">
        <div><Navbar/></div>
        <div>
          <Header/>
          <div className='divContainer'>
            <Formulario/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
