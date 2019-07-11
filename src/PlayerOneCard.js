import React, { Component } from 'react';

const scissors = 'https://i.imgur.com/pgjyhIZ.png';
const rock = 'https://i.imgur.com/LghSkIw.png';
const paper = 'https://i.imgur.com/2gsdqvR.png';

class PlayerOneCard extends Component {
  constructor(props) {
    super(props);
    this.player = props.playerNumber
    this.setPlayerOne = props.setPlayerOne
    this.image = 'https://i.imgur.com/LghSkIw.png';
    this.signArray = props.signArray;
    this.state = {
      sign: 'rock',
      count: 1,
    };
  }

  pick = () => {
    if(this.state.count <= this.signArray.length) {
      this.setState(prevState => ({
        sign: this.signArray[this.state.count],
        count: prevState.count + 1
      }));
      console.log(this.state.sign)
      this.setPlayerOne(this.state.sign)
      if (this.state.count === 0) {
        this.image = rock;
      } else if (this.state.count === 1) {
        this.image = scissors;
      } else {
        this.image = paper
      }
    } else{
      this.setState({
        sign: "rock",
        count: 0,
      });
    }
  }

  render() {
    return (
      <div className="player-card">
        {this.player}
        <img src={this.image} alt="" onClick={this.pick} />
      </div>
    );
  }
}

export default PlayerOneCard;
