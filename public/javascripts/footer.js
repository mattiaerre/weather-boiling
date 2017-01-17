((moment) => {
  if (!moment) { return; }

  const movedToLondon = document.getElementById('moved-to-london');
  const when = moment('30/01/2013', 'DD/MM/YYYY');
  movedToLondon.innerHTML = `${when.fromNow()} - `;
})(moment);
