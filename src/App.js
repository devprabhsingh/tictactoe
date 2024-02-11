import './App.css';
import Game from './components/Game';
import { useState } from 'react';
import signBoard from './images/sign-board.png'

import TicBackground from './components/TicBackground';

function App() {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [showGame, setShowGame] = useState(false);

  const checkNames = () => {
    if (player1!=='' && player2!=='') {
      setShowGame(true)
      document.getElementById('name-form').style.display = "none";
      document.getElementById('tic-back').style.display = "none";
    } else {
      setShowGame(false)
    }

  }

  return (
    <div id="app">
      <div id="header-back">
        <img src={signBoard} alt="background" />
        <header>
         <p>TicTacToe</p> 
        </header>
        </div>
        
      <div style={{position:'relative', width: '100%',height:'100vh'}}>
        <TicBackground/>
        <div id="name-form" style={{position:'absolute',top:'30%',left:'50%',transform:'translate(-50%,-50%)'}}>

          <input value={player1} onChange={(e) => setPlayer1(e.target.value)} placeholder='Player 1 name' type="text" />
          <input value={player2} onChange={(e) => setPlayer2(e.target.value)} placeholder='Player 2 name' type="text" />
          <button id="names-submit-btn"
              onClick={checkNames}>Start the game</button>
          
        </div>
        </div>
      
      {showGame && <Game player1={player1} player2={player2} />}
      
    </div>
  );
}

export default App;
