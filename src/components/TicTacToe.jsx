import React, { Component } from 'react';
import { winPositions, checkWin } from '../utils/helper';

const style = {
  titleStyle: {
    textAlign: 'center',
    fontFamily: 'cursive',
    fontSize: 'large',
    fontWeight: 'bold'
  },
  dashboardStyle: {
    backgroundColor: '#bbb',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0px',
    display: 'flex',
    width: '450px',
    height: '450px',
    listStyle: 'none',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardBoardEven: {
    backgroundColor: '#333',
    width: '150px',
    height: '150px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  cardBoardOdd: {
    backgroundColor: '#bbb',
    width: '150px',
    height: '150px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resetBtn: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '35px',
    width: '100px',
    fontSize: '13px',
    cursor: 'pointer'
  }
};

const Box = ({ style, onClick, children }) => {
  return (
    <li
      style={style}
      onClick={onClick}
    >{children}</li>
  )
}

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      box: ['','','','','','','','',''],
      winner: '',
      numberOfPlay: 0,
    }
    this.positionOne = [];
    this.positionTwo = [];
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleUpdateBoxValues = this.handleUpdateBoxValues.bind(this);
  }

  /**
   * Sets the value of the player game data into the selected box 
   * position.
   * @param {string} currentPosition the selected box position where game data should be inserted
   * @returns {string} 
   * @memberof TicTacToe
   */
  handleUpdateBoxValues(currentPosition) {
    let boxCopy, boxFilledValue;
    const { box, playerSwitch, numberOfPlay, winner } = this.state;
    // let boxFilledValue = numberOfPlay % 2 ? 'X' : 'O';
    if (numberOfPlay % 2 === 0) {
      boxFilledValue = 'X';
      this.positionOne.push(currentPosition);
    } else {
      boxFilledValue = 'O';
      this.positionTwo.push(currentPosition);
    }

    if (box[currentPosition] || winner) return box;

    if (currentPosition === 0) {
      boxCopy = [
        boxFilledValue,
        ...box.slice(1, box.length),
      ];
    } else if (currentPosition === 8) {
      boxCopy = [
        ...box.slice(0, currentPosition),
        boxFilledValue
      ];
    } else {
      boxCopy = [
        ...box.slice(0, currentPosition),
        boxFilledValue,
        ...box.slice(currentPosition + 1, box.length)
      ];
    }
    this.setState((prevState, props) => {
      return {
        box: boxCopy,
        numberOfPlay: prevState.numberOfPlay + 1
      }
    });
  }

  /**
   * Handles the click event when the user clicks any of the board positions
   * @param {string} currentPosition the selected box position where game data should be inserted
   * @returns 
   * @memberof TicTacToe
   */
  handleClick(currentPosition) {
    return this.setState((prevState, props) => {
      return {
        box: this.handleUpdateBoxValues(currentPosition),
        position: currentPosition
      }
    }, () => { this.handleWin(); });
  }

  /**
   * Resets the game to the default mode
   * @memberof TicTacToe
   */
  handleReset() {
    this.positionOne = [];
    this.positionTwo = [];
    this.setState((prevState, props) => {
      return {
        winner: '',
        box: ['','','','','','','','',''],
        numberOfPlay: 0
      };
    });
  }

  /**
   * Checks if the game player has won the round
   * @returns 
   * @memberof TicTacToe
   */
  handleWin() {
    let winner = '';
    const { numberOfPlay } = this.state;
    if (Math.ceil(numberOfPlay / 2) < 3) return;

    if (checkWin(winPositions(), this.positionOne)) {
      winner = 'PlayerOne'
    } else if(checkWin(winPositions(), this.positionTwo)) {
      winner = 'PlayerTwo'
    }
    this.setState((prevState, props) => {
      return {
        winner
      }
    });
  }

  render() {
    const { box, winner } = this.state;
    return (
      <div className="container">
        <header className="title" style={style.titleStyle}>TIC TAC TOE</header>
        {
          winner && <h2 style={{ textAlign: 'center' }}>{winner} has won the game!</h2>
        }
        <ul className="dashboard" style={style.dashboardStyle}> 
          <Box
            key={0}
            style={style.cardBoardEven}
            onClick={() => this.handleClick(0)}
          >{box[0]}</Box>
          <Box
            key={1}
            style={style.cardBoardOdd}
            onClick={() => this.handleClick(1)}
          >{box[1]}</Box>
          <Box
            key={2}
            style={style.cardBoardEven}
            onClick={() => this.handleClick(2)}
          >{box[2]}</Box>
          <Box
            key={3}
            style={style.cardBoardOdd}
            onClick={() => this.handleClick(3)}
          >{box[3]}</Box>
          <Box
            key={4}
            style={style.cardBoardEven}
            onClick={() => this.handleClick(4)}
          >{box[4]}</Box>
          <Box
            key={5}
            style={style.cardBoardOdd}
            onClick={() => this.handleClick(5)}
          >{box[5]}</Box>
          <Box
            key={6}
            style={style.cardBoardEven}
            onClick={() => this.handleClick(6)}
          >{box[6]}</Box>
          <Box
            key={7}
            style={style.cardBoardOdd}
            onClick={() => this.handleClick(7)}
          >{box[7]}</Box>
          <Box
            key={8}
            style={style.cardBoardEven}
            onClick={() => this.handleClick(8)}
          >{box[8]}</Box>
        </ul>
        <button
          style={style.resetBtn}
          onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default TicTacToe;