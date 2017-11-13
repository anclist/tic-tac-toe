document.addEventListener('DOMContentLoaded', function() {

  var container = document.querySelector('.container');

  container.addEventListener('click', function(e) {
    if ( e.target.classList.contains('item') ) {
      console.log(e.target);
    }
  });


});
