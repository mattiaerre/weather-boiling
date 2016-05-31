(function (moment) {
  if (!moment)
    return;

  var when = moment('30/01/2013', 'DD/MM/YYYY');
  var movedToLondon = document.getElementById('moved-to-london');
  movedToLondon.innerHTML = when.fromNow() + ' - ';
})(moment);