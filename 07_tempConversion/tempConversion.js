const ftoc = function(c) {
  f = (c - 32) * (5/9)
  return +f.toFixed(1)
};

const ctof = function(f) {
  c = (f * (9/5)) + 32
  return +c.toFixed(1)

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
