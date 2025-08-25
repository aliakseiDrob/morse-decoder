const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const matrix = [];
  for (let i = 0; i < expr.length; i += 10) {
    matrix.push(expr.slice(i, i + 10));
  }
  return matrix
    .map((el) => (el.includes(1) ? Number(el) : el))
    .map((el) => (el === '**********' ? ' ' : String(el)))
    .map((el) => el.replaceAll('11', '-'))
    .map((el) => el.replaceAll('10', '.'))
    .map((el) => {
      if (el !== ' ') {
        return MORSE_TABLE[el];
      }
      return el;
    })
    .join('');
};
