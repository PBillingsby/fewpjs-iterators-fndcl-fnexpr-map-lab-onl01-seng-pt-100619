const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// Take each index of tutorials array
let newestArr = []
function titleCased(arr) {
  arr.map(str => {
    let newStr = str.split(" ")
    replaceFirstChar(newStr)
  })
  return newestArr
}

titleCased(tutorials);

function replaceFirstChar(arr) {
  let newArr = arr.map(word => word[0].toUpperCase() + word.slice(1))
  newestArr.push(newArr)
}
// Map each string, split string, manipulate to title case
// Return an array with title cased tutorials
