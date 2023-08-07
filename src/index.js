const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let morse = Object.entries(MORSE_TABLE)
    let arrFromExpr = Array.from(expr)
    console.log(arrFromExpr);
    let matrix=[]
    let arrSize=10
    for (let i=0; i<arrFromExpr.length; i+=arrSize) {
      matrix.push(arrFromExpr.slice(i,i+arrSize))
    }
  
    let joined = matrix.map(el=>{
     return el.join('')
    })
  console.log(joined);

  let arrWithNumber = joined.map(el=>{
  if(el.includes(1)) {
    return Number(el)
  }
  return el
})
let arrWithWhitespace = arrWithNumber.map(el=>{
  if (el == '**********') {
    return el.replaceAll(el, ' ')
  }
  return String(el)
})

let dash = arrWithWhitespace.map(el=>{
  return el.replaceAll('11','-')
})

let dot= dash.map(el=> {
  return el.replaceAll('10','.')
})

let output = dot.map(el=>{
 for (let i in morse) {
  if(el==morse[i][0]) {
    return el.replaceAll(el, morse[i][1])
  }else if(el==' ') {
    return el
  }
 }
})
let endOutput = output.join('')
return endOutput
}

module.exports = {
    decode
}
