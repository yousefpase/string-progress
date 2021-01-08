
const options = require('./format.js');

function calculat(total, current, size, slider, line) {
  if (current < 3) current = 3;
  var division = current / total;
  var bar = Math['round']((size * division));
  var noline = size - bar;
  var bar_complate = line.repeat(bar).replace(/.$/, slider);
  var empty = line.repeat(noline);
  bar = bar_complate + empty;
  
  return bar;
}
module.exports = calculat;
