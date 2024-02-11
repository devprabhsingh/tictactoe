import { useEffect, useState } from 'react';

const winArr = ["123", "456", "789", "147", "258", "369", "159", "357"];

const Game = ({player1,player2}) => {

  const [turnCount, setTurnCount] = useState(1);
  const [p1PosArr, setP1PosArr] = useState([]);
  const [p2PosArr, setP2PosArr] = useState([]);
  const [winner, setWinner] = useState('');


  const clearState = () => {
    setTurnCount(1);
    setP1PosArr([]);
    setP2PosArr([]);
    setWinner('');
    document.getElementById('new-game').style.display = "none";
    Array.from(document.getElementsByClassName('box')).forEach((box) => {
      box.innerHTML = '';
      box.style.backgroundColor = "transparent";
    })
    document.getElementById('board').style.pointerEvents = "auto";
  }

  const handleClick = (e) => {

    if (e.target.innerHTML === '') {
      setTurnCount(turnCount + 1);
      if (turnCount % 2 === 0) {

        e.target.innerHTML = 'O';
        const updatedArr = [...p2PosArr,e.target.id]
        setP2PosArr(updatedArr)
        document.getElementById('msg1').style.opacity = 1;
        document.getElementById('msg2').style.opacity = 0;

      } else {
        e.target.innerHTML = 'X';
        const updatedArr = [...p1PosArr, e.target.id];
        setP1PosArr(updatedArr)
        document.getElementById('msg1').style.opacity = 0;
        document.getElementById('msg2').style.opacity = 1;
      }
    }

    
  }
  
  useEffect(() => {
  const checkWinner = (player,posArr) => {

    winArr.forEach(p=>{
      let c=0;
      posArr.forEach(pos=>{
          if(p.includes(pos)){
              c++;
          }
      })
      if(c===3){
        setWinner(player)
        for (let i = 0; i < 3; i++) {
          document.getElementById(p[i]).style.backgroundColor = "green";
        }
        document.getElementById('board').style.pointerEvents = "none";
        document.getElementById('msg1').style.opacity = 0;
        document.getElementById('msg2').style.opacity = 0;
        document.getElementById('new-game').style.display = "block";
        
      }
  })
    
  }
  checkWinner(player1,p1PosArr);
  checkWinner(player2,p2PosArr);
  },[player1,player2,p1PosArr,p2PosArr])
    
  return (
    <div id='game-wrapper'>
      <div id="game">
        
        {window.innerWidth > 800 ? (
          <div className='player-info'>
          <div>
        <p className='icon'>X</p>
          <h2>{player1}</h2></div>
          <p id="msg1" className='blink'>
        It's your turn!</p>
      </div>
        ):''}
       
      <div id='board'>
        
          <div className='row'>
            <div id="1" onClick={handleClick} className='box'></div>
            <div id="2" onClick={handleClick} className='box'></div>
            <div id="3" onClick={handleClick} className='box'></div>
          </div>
          <div className='row'>
            <div id="4" onClick={handleClick} className='box'></div>
            <div id="5" onClick={handleClick} className='box'></div>
            <div id="6" onClick={handleClick} className='box'></div>
          </div>
          <div className='row'>
            <div id="7" onClick={handleClick} className='box'></div>
            <div id="8" onClick={handleClick} className='box'></div>
            <div id="9" onClick={handleClick} className='box'></div>
        </div>
      </div>
              
        <div id="player-info-wrapper">
          {window.innerWidth < 800 ? (
            <div className='player-info'>
          <div>
        <p className='icon'>X</p>
          <h2>{player1}</h2></div>
          <p id="msg1" className='blink'>
        It's your turn!</p>
      </div>
          ):''}
        <div className='player-info'>
          <div>
        <p className='icon'>O</p>
        <h2>{player2}</h2></div>
        <p id="msg2" className='blink'>
        It's your turn!</p>
          </div>
          </div>
        
      </div>
        
      <div id="winner">
      {winner === player1 && <p>Winner is <span>{player1}</span></p>}
        {winner === player2 && <p>Winner is <span>{player2}</span></p>}
      </div>
      
      <button id="new-game" onClick={clearState}>Play again</button>

      </div>
    )
}

export default Game;