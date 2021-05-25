import './App.css';
import {useState, useEffect} from 'react'
import Form from './components/Form';
import { Router } from '@reach/router';
import axios from 'axios'
import Games from './components/Games'
import TopNav from './components/TopNav';
import PlayerList from './components/PlayerList';


function App() {
  const [players, setPlayers] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
          .then(res => {
            setPlayers(res.data.results)
            setLoaded(true)
          })
  })
  

  return (
    <div className="App">
      { loaded ?
      <>
        <TopNav/>
        <Router>
          <PlayerList path="/players/list" players={ players }  setPlayers={ setPlayers }/>
          <Form path="/players/addplayer"  players={ players }  setPlayers={ setPlayers } />
          <Games path="/games/:number" players={ players }  setPlayers={ setPlayers }/>
        </Router>
      </>
      : <h1>Loading</h1>
      }
    </div>
  );
}

export default App;
