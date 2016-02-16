module.exports = (string,type) => {

  const regexs = {
    devCode: /^[a-zA-Z0-9!"#$%&'()*+,.\\\/:;<=>?@\[\] ^_`{|}~-\s\r\n\t]+$/,
    upAlpha: /^[A-Z]+$/,
    lowAlpha: /^[a-z]+$/,
    digits: /^[0-9]+$/,
    alphaNum: /^[a-zA-z0-9]+$/,
    enSentence: /^[a-zA-z.,;'"&\s]+$/
  }

  if (typeof type === 'undefined') { type = 'enSentence'; }
  return regexs[type].test(string);

}
