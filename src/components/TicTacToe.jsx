import React, { Component } from 'react';

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

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    // CONSIDER: turn the box default state to an object consisting of { value: '', lock: false }
    // to prevent mutation of already set boxes
    this.state = {
      boxOneValue: '',
      boxTwoValue: '',
      boxThreeValue: '',
      boxFourValue: '',
      boxFiveValue: '',
      boxSixValue: '',
      boxSevenValue: '',
      boxEightValue: '',
      boxNineValue: '',
      win: false,
      playerSwitch: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setBoxValue = this.setBoxValue.bind(this);
  }

  /**
   * Sets the value of the player game data into the selected box 
   * position.
   * @param {string} boxPosition the selected box position where game data should be inserted
   * @returns {string} 
   * @memberof TicTacToe
   */
  setBoxValue(boxPosition) {
    const { playerSwitch } = this.state;
    const boxPositionInput = `box${boxPosition}Input`;
    this[boxPositionInput].innerHTML = playerSwitch ? 'X' : 'O';
    this.setState((prevState, props) => {
      return {
        playerSwitch: !prevState.playerSwitch
      }
    });
    return this[boxPositionInput].innerHTML;
  }

  /**
   * Handles the click event when the user clicks any of the board positions
   * @param {string} boxPosition the selected box position where game data should be inserted
   * @returns 
   * @memberof TicTacToe
   */
  handleClick(boxPosition) {
    // TODO: Handle the set state in the setBoxValue without another switch statement
    // TODO: Refactor the handleClick to encapsulate the switch functionality to another function
    // BLOCKER: Object cannot be given a key with the backticks string interpolation - `${string}`
    switch(boxPosition) {
      case 'One':
        return this.setState((prevState, props) => {
          return {
            boxOneValue: this.setBoxValue('One')
          }
        }, () => this.handleWin());
      case 'Two':
        return this.setState((prevState, props) => {
          return {
            boxTwoValue: this.setBoxValue('Two')
          }
        }, () => this.handleWin());
      case 'Three':
        return this.setState((prevState, props) => {
          return {
            boxThreeValue: this.setBoxValue('Three')
          }
        }, () => this.handleWin());
      case 'Four':
        return this.setState((prevState, props) => {
          return {
            boxFourValue: this.setBoxValue('Four')
          }
        }, () => this.handleWin());
      case 'Five':
        return this.setState((prevState, props) => {
          return {
            boxFiveValue: this.setBoxValue('Five')
          }
        }, () => this.handleWin());
      case 'Six':
        return this.setState((prevState, props) => {
          return {
            boxSixValue: this.setBoxValue('Six')
          }
        }, () => this.handleWin());
      case 'Seven':
        return this.setState((prevState, props) => {
          return {
            boxSevenValue: this.setBoxValue('Seven')
          }
        }, () => this.handleWin());
      case 'Eight':
        return this.setState((prevState, props) => {
          return {
            boxEightValue: this.setBoxValue('Eight')
          }
        }, () => this.handleWin());
      case 'Nine':
        return this.setState((prevState, props) => {
          return {
            boxNineValue: this.setBoxValue('Nine')
          }
        }, () => this.handleWin());
      default:
        return false;
    }
  }

  /**
   * Resets the game to the default mode
   * @memberof TicTacToe
   */
  handleReset() {
    this.state.boxOneValue = '';
    this.state.boxTwoValue = '';
    this.state.boxThreeValue = '';
    this.state.boxFourValue = '';
    this.state.boxFiveValue = '';
    this.state.boxSixValue = '';
    this.state.boxSevenValue = '';
    this.state.boxEightValue = '';
    this.state.boxNineValue = '';
    this.setState((prevState, props) => {
      return {
        win: false
      };
    });
  }

  /**
   * Checks if the game player has won the round
   * @returns 
   * @memberof TicTacToe
   */
  handleWin() {
    const { 
      boxOneValue,
      boxTwoValue,
      boxThreeValue,
      boxFourValue,
      boxFiveValue,
      boxSixValue,
      boxSevenValue,
      boxEightValue,
      boxNineValue } = this.state;

      if((boxOneValue === 'X' && boxTwoValue === 'X' && boxThreeValue === 'X') || (boxOneValue === 'O' && boxTwoValue === 'O' && boxThreeValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxFourValue === 'X' && boxFiveValue === 'X' && boxSixValue === 'X') || (boxFourValue === 'O' && boxFiveValue === 'O' && boxSixValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxSevenValue === 'X' && boxEightValue === 'X' && boxNineValue === 'X') || (boxSevenValue === 'O' && boxEightValue === 'O' && boxNineValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxOneValue === 'X' && boxFourValue === 'X' && boxSevenValue === 'X') || (boxOneValue === 'O' && boxFourValue === 'O' && boxSevenValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxTwoValue === 'X' && boxFiveValue === 'X' && boxEightValue === 'X') || (boxTwoValue === 'O' && boxFiveValue === 'O' && boxEightValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxThreeValue === 'X' && boxSixValue === 'X' && boxNineValue === 'X') || (boxThreeValue === 'O' && boxSixValue === 'O' && boxNineValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxOneValue === 'X' && boxFiveValue === 'X' && boxNineValue === 'X') || (boxOneValue === 'O' && boxFiveValue === 'O' && boxNineValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      } else if((boxThreeValue === 'X' && boxFiveValue === 'X' && boxSevenValue === 'X') || (boxThreeValue === 'O' && boxFiveValue === 'O' && boxSevenValue === 'O')) {
        return this.setState((prevState, props) => {
          return {
            win: true
          }
        });
      }
  }

  render() {
    const { 
      boxOneValue,
      boxTwoValue,
      boxThreeValue,
      boxFourValue,
      boxFiveValue,
      boxSixValue,
      boxSevenValue,
      boxEightValue,
      boxNineValue,
      win } = this.state;
    return (
      <div className="container">
        <header className="title" style={style.titleStyle}>TIC TAC TOE</header>
        {
          win && <h2 style={{ textAlign: 'center' }}>You have won the game!</h2>
        }
        <ul className="dashboard" style={style.dashboardStyle}>
          <li
            style={style.cardBoardEven}
            ref={input => this.boxOneInput = input}
            onClick={() => this.handleClick('One')}>{boxOneValue}</li>
          <li
            style={style.cardBoardOdd}
            ref={input => this.boxTwoInput = input}
            onClick={() => this.handleClick('Two')}>{boxTwoValue}</li>
          <li
            style={style.cardBoardEven}
            ref={input => this.boxThreeInput = input}
            onClick={() => this.handleClick('Three')}>{boxThreeValue}</li>
          <li
            style={style.cardBoardOdd}
            ref={input => this.boxFourInput = input}
            onClick={() => this.handleClick('Four')}>{boxFourValue}</li>
          <li
            style={style.cardBoardEven}
            ref={input => this.boxFiveInput = input}
            onClick={() => this.handleClick('Five')}>{boxFiveValue}</li>
          <li
            style={style.cardBoardOdd}
            ref={input => this.boxSixInput = input}
            onClick={() => this.handleClick('Six')}>{boxSixValue}</li>
          <li
            style={style.cardBoardEven}
            ref={input => this.boxSevenInput = input}
            onClick={() => this.handleClick('Seven')}>{boxSevenValue}</li>
          <li
            style={style.cardBoardOdd}
            ref={input => this.boxEightInput = input}
            onClick={() => this.handleClick('Eight')}>{boxEightValue}</li>
          <li
            style={style.cardBoardEven}
            ref={input => this.boxNineInput = input}
            onClick={() => this.handleClick('Nine')}>{boxNineValue}</li>
        </ul>
        <button
          style={style.resetBtn}
          onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default TicTacToe;