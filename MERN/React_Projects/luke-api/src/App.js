import './App.css';
import Navbar from './components/Navbar';
import { Router } from '@reach/router';
import Person from './components/Person';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Person path="/Person/:id"/>
        <Planet path="/Planet/:id"/>
      </Router>
    </div>
  );
}

export default App;
