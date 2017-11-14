document.addEventListener('DOMContentLoaded', function() {

  const container = document.querySelector('.container'),
        ex = 'x',
        zero = '0',
        one = document.querySelector('.item_1'),
        two = document.querySelector('.item_2'),
        three = document.querySelector('.item_3'),
        four = document.querySelector('.item_4'),
        five = document.querySelector('.item_5'),
        six = document.querySelector('.item_6'),
        seven = document.querySelector('.item_7'),
        eight = document.querySelector('.item_8'),
        nine = document.querySelector('.item_9');

  var counter = 0,
      turn = document.querySelector('.turn');



  container.addEventListener('click', function(e) {
    if (e.target.innerText == ex || e.target.innerText == zero) {
      return;
    } else if (counter % 2 == 0) {
      e.target.innerText = ex;
      turn.innerText = `It's ${zero}'s turn!`
    } else {
      e.target.innerText = zero;
      turn.innerText = `It's ${ex}'s turn!`
    };
    counter++;
  });

});


// if (one.innerText == two.innerText && one.innerText == three.innerText && two.innerText == three.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (four.innerText == five.innerText && four.innerText == six.innerText && five.innerText == six.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (seven.innerText == eight.innerText && seven.innerText == nine.innerText && eight.innerText == nine.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (one.innerText == four.innerText && one.innerText == seven.innerText && four.innerText == seven.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (two.innerText == five.innerText && two.innerText == eight.innerText && five.innerText == eight.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (three.innerText == six.innerText && three.innerText == nine.innerText && six.innerText == nine.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (one.innerText == five.innerText && one.innerText == nine.innerText && five.innerText == nine.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// } else if (three.innerText == five.innerText && three.innerText == seven.innerText && five.innerText == seven.innerText) {
//   console.log(`${e.target.innerText} Wins`)
// };





// const winningCombinations = [
//   ['A1', 'B1', 'C1'],
//   ['A2', 'B2', 'C2'],
//   ['A3', 'B3', 'C3'],
//   ['A1', 'A2', 'A3'],
//   ['B1', 'B2', 'B3'],
//   ['C1', 'C2', 'C3'],
//   ['A1', 'B2', 'C3'],
//   ['C1', 'B2', 'A3']
// ]
