import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import HomePage from './components/HomePage';
import NotHomePage from './components/NotHomePage';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <DisplayPokemon path="/"/>
        <HomePage path="/home"/>
        <NotHomePage path=":id"/>
        <NotHomePage path=":id/:text"/>
        <NotHomePage path=":id/:text/:background"/>
      </Router>
    </div>
  );
}

export default App;
