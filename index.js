module.exports = {
  devCode: (string) => {
    return /^[a-zA-Z0-9!"#$%&'()*+,.\\\/:;<=>?@\[\] ^_`{|}~-\s\r\n\t]+$/.test(string);
  },
  upAlpha: (string) => {
    return /^[A-Z]+$/.test(string);
  },
  lowAlpha: (string) => {
    return /^[a-z]+$/.test(string);
  },
  digits: (string) => {
    return /^[0-9]+$/.test(string);
  },
  alphaNum: (string) => {
    return /^[a-zA-z0-9]+$/.test(string);
  },
  enSentence: (string) => {
    return /^[a-zA-z.,;'"&\s]+$/.test(string);
  }
}
