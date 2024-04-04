import Navbar from './components/navbar';
import { useState } from 'react';
import Header from './components/header';
import Formulario from './components/formsAnadir/formulario';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <div className="principal">
        <div><Navbar/></div>
          
        <div>
          <Header/>
          <div className='divContainer'> 
          
          </div>
        </div>
        
      </div>
    </div>
  )}
export default App
