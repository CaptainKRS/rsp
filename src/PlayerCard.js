import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
  const sign = props.sign
  const player = props.playerNumber
  let image= ""

  if (sign === "rock") {
    image = rock;
  } else if (sign === "paper") {
    image = paper;
  } else {
    image = scissors
  }

  return (
    <div className="player-card">
      {player}
      <img src={image} alt=""/>
    </div>
  )
}

export default PlayerCard
