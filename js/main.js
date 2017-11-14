document.addEventListener('DOMContentLoaded', function() {

  const container = document.querySelector('.container'),
        button = document.querySelector('.button')
        ex = 'X',
        zero = '0';

  var counter = 0,
      turn = document.querySelector('.turn');

  var grid = {
    A1: 0,
    B1: 0,
    C1: 0,
    A2: 0,
    B2: 0,
    C2: 0,
    A3: 0,
    B3: 0,
    C3: 0
  }

  function xWins() {
    alert(`${ex} Wins`);
  }

  function zeroWins() {
    alert(`${zero} Wins`);
  }

  function reload() {
    window.location.reload(true);
  }

  function firstRow() {
    return grid['A1'] + grid['B1'] + grid['C1']
  }

  function secondRow() {
    return grid['A2'] + grid['B2'] + grid['C2']
  }

  function thirdRow() {
    return grid['A3'] + grid['B3'] + grid['C3']
  }

  function firstColumn() {
    return grid['A1'] + grid['A2'] + grid['A3']
  }

  function secondColumn() {
    return grid['B1'] + grid['B2'] + grid['B3']
  }

  function thirdColumn() {
    return grid['C1'] + grid['C2'] + grid['C3']
  }

  function firstDiagonal() {
    return grid['A1'] + grid['B2'] + grid['C3']
  }

  function secondDiagonal() {
    return grid['A3'] + grid['B2'] + grid['C1']
  }

  button.addEventListener('click', function() {
    reload();
  });

  container.addEventListener('click', function(e) {
    if (e.target.innerText == ex || e.target.innerText == zero) {
      return;
    } else if (counter % 2 == 0) {
      e.target.innerText = ex;
      turn.innerText = `It's ${zero}'s turn!`
      grid[e.target.classList[1]] = 1;
    } else {
      e.target.innerText = zero;
      turn.innerText = `It's ${ex}'s turn!`
      grid[e.target.classList[1]] = -1;
    };
    counter++;
    if (firstRow() === 3) {
      xWins();
      reload();
    } else if (firstRow() === -3) {
      zeroWins();
      reload();
    } else if (secondRow() === 3) {
      xWins();
      reload();
    } else if (secondRow() === -3) {
      zeroWins();
      reload();
    } else if (thirdRow() === 3) {
      xWins();
      reload();
    } else if (thirdRow() === -3) {
      zeroWins();
      reload();
    } else if (firstColumn() === 3) {
      xWins();
      reload();
    } else if (firstColumn() === -3) {
      zeroWins();
      reload();
    } else if (secondColumn() === 3) {
      xWins();
      reload();
    } else if (secondColumn() === -3) {
      zeroWins();
      reload();
    } else if (thirdColumn() === 3) {
      xWins();
      reload();
    } else if (thirdColumn() === -3) {
      zeroWins();
      reload();
    } else if (firstDiagonal() === 3) {
      xWins();
      reload();
    } else if (firstDiagonal() === -3) {
      zeroWins();
      reload();
    } else if (secondDiagonal() === 3) {
      xWins();
      reload();
    } else if (secondDiagonal() === -3) {
      zeroWins();
      reload();
    }
  });

});
