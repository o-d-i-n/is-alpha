module.exports = function (string) {
  return /^[a-zA-Z\.,\-() \n\r]*$/.test(string);
};
