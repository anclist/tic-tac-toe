document.addEventListener('DOMContentLoaded', function() {

  var container = document.querySelector('.container'),
      ex = 'x',
      cero = '0'
      counter = 0

  container.addEventListener('click', function(e) {
    if (counter % 2 == 0) {
      e.target.innerText = ex;
    } else {
      e.target.innerText = cero;
    }
    counter++
  });


});
