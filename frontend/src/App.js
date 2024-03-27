import './styles/App.css';
import Navbar from './components/navbar';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <div class="principal">
        <div><Navbar/></div>
        <div><Header/></div>
      </div>
    </div>
  );
}

export default App;
