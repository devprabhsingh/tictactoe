import React, { useState, useEffect } from 'react';
import tictactoeIcon from '../images/tictacicon.png'

// const TicBackground = () => {
//   const imagePositions = [
//     { top: '0vh', left: '5vw'},
//     { top: '0vh', left: '25vw'},
//     { top: '0vh', left: '45vw'},
//     { top: '0vh', left: '65vw'},
//     { top: '0vh', left: '85vw'},
//     { top: '20vh', left: '7vw'},
//     { top: '20vh', left: '27vw'},
//     { top: '20vh', left: '47vw'},
//     { top: '20vh', left: '67vw'},
//     { top: '20vh', left: '87vw'},
//     { top: '40vh', left: '5vw'},
//     { top: '40vh', left: '25vw'},
//     { top: '40vh', left: '45vw'},
//     { top: '40vh', left: '65vw'},
//     { top: '40vh', left: '85vw'},
//     { top: '60vh', left: '7vw'},
//     { top: '60vh', left: '27vw'},
//     { top: '60vh', left: '47vw'},
//     { top: '60vh', left: '67vw'},
//     { top: '60vh', left: '87vw'},
//     { top: '80vh', left: '7vw'},
//     { top: '80vh', left: '27vw'},
//     { top: '80vh', left: '47vw'},
//     { top: '80vh', left: '67vw'},
//     { top: '80vh', left: '87vw'},
//     // Add more positions as needed
//   ];

//   const handleImageHover = (event) => {
//     event.target.style.transform = 'scale(1.3) rotate(80deg)';
//   };

//   const handleImageLeave = (event) => {
//     event.target.style.transform = 'scale(1)';
//   };

//   return (
    
//     <div id="tic-back"style={{ position: 'relative'}}>
//       {imagePositions.map((position, index) => (
//         <img
//           key={index}
//           src={tictactoeIcon}
//           alt={`TicTacToe ${index + 1}`}
//           style={{
//             position: 'absolute',
//             top: position.top,
//             left: position.left,
//             transform: `rotate(${position.rotate})`,
//             width: '50px',
//             height: '50px',
//             cursor: 'pointer',
//             transition: 'transform 0.3s ease-in-out',
//           }}
//           onMouseOver={handleImageHover}
//           onMouseLeave={handleImageLeave}
//         />
//       ))}
//       </div>
      
//   );
// };


const TicBackground = () => {

  const [elPos, setElPos] = useState([]);


  useEffect(() => {

    let count = 70;
    
    if (window.innerWidth < 768) {
      count = 30;
    } 

    const elPos = [];
    for (let i = 0; i < count; i++) {
      let randomNum;
    
      randomNum = Math.floor(Math.random() * (201) - 100);
      if (!elPos.includes(randomNum)) {
        elPos.push(randomNum)
      }
      
    }
    setElPos(elPos);


  },[])

  return (
    <div id="tic-back" style={{
      position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#ed9e77b8',overflow:'hidden'
    }}>
      {elPos.map((el,i) => (
        <img key={i}
          src={tictactoeIcon}
          className='el'
          style={{
            position: 'absolute',
            top: el*0.05+'vh',
            left: el + 'vw',
            animationDelay: el * 0.4 + 's',
            margin:'10px'
            
          }}/>
        // >{i%2===0?'X':'O'}</p>
      ))}


      
      
    </div>
  )
}
 export default TicBackground;
