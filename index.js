
// Take each index of tutorials array
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

function titleCased() {
  let newArr = [];

  tutorials.map(tut => {
    let newStr = tut.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    newArr.push(newStr)
  })
}
