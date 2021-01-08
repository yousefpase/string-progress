
const normal_slider = "🔘";
const normal_line = "▬";
const normal_size = 20;

const calculator = require("./calculat.js");

const bar = function(total, current, options) {
  options = options || {};
  var slider, line, size;
  if (options.slider) slider = options.slider;
  if (!options.slider) slider = normal_slider;
  
  if (options.line) line = options.line;
  if (!options.line) line = normal_line;
  
  if (options.size) size = options.size;
  if (!options.size) size = normal_size;

  return calculator(total, current, size, slider, line);
};

module.exports = bar;
