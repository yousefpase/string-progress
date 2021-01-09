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

const __format = function(sec, options) {
  options = options || {};
  if ('object' !== typeof options || !(options instanceof Object)) {
    throw new Error('Options must be Object');
    return null;
  }
  sec = sec || 0;
  if (sec && sec == '' || isNaN(sec)) {
    throw new Error('Seconds must be Number');
    return null;
  }
  sec = sec ? Math.floor(sec) : 0;
  
  if (sec < 1) return '00:00';
  
  var date = new Date(sec * 1000);
  
  date = date.toISOString();
  
  if (sec == 3600 || sec > 3600) {
    date = date.substr(11,8);
  } else {
    date = date.substr(14,5);
  }
  
  return date;
}

module.exports = {
  bar,
  __format
};
