import _ from 'lodash';

export const winPositions = () => {
  return [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
}

export const compareEachWinVariation = (winPosition, playerPositions) => {
  const bucket = [];
  if (Array.isArray(playerPositions) && playerPositions.length > 2) {
    playerPositions.map(position => {
      _.indexOf(winPosition, position) !== -1 ? bucket.push(true) : null;
    });
    return bucket.length === 3 ? true : false;
  }
}

export const checkWin = (winPositions, playerPositions) => {
  const result = [];
  if (Array.isArray(winPositions)) {
    winPositions.map(position => {
      compareEachWinVariation(position, playerPositions) ? result.push(true) : result.push(false);
    });
    return _.indexOf(result, true) !== -1 ? true : false;
  }
}