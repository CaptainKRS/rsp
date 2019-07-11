import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import PlayerOneCard from './PlayerOneCard';

export default class App extends Component {
  constructor() {
    super();
    this.signs = ['rock', 'scissors', 'paper'];
    this.state = {
      playerOne: 'rock',
      playerTwo: 'scissors',
      winner: "It's a Tie!"
    };
  }

  setPlayerOne = (sign) => {
    console.log(sign)
    this.setState({
      playerOne: sign,
    })
  }

  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;

    if (playerOne === playerTwo) {
      this.setState({
        winner: "It's a Tie!",
      })
    } else if (
      (playerOne === 'rock' && playerTwo === 'scissors') ||
      (playerOne === 'paper' && playerTwo === 'rock') ||
      (playerOne === 'scissors' && playerTwo === 'paper')
    ) {
      this.setState({
        winner: "Player 1 Wins!",
      })
    } else {
      this.setState({
        winner: "Player 2 Wins!",
      })
    }
  };

  playGame = () => {
    this.setState({
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    });
  };

  runAll = () => {
    this.playGame();
    setTimeout(()=> this.decideWinner(),500)
  }

  render() {
    return (
      <div className="style">
        <div>
          <PlayerOneCard setPlayerOne={this.setPlayerOne} playerNumber="Player 1" signArray={this.signs}/>
          <PlayerCard sign={this.state.playerTwo} playerNumber="Player 2"/>
        </div>
        <div className="winner">{this.state.winner}</div>
        <button type="button" onClick={this.runAll}>
          Play the Game
        </button>
      </div>
    );
  }
}
