const findNeedle = function(words, item) {
  if (words.includes(item)) {
return words.indexOf(item);
  }
};

module.exports = findNeedle;