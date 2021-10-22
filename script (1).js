let questions = [
  "Что мне взять с собой на каток?",
  "Что мне положить в холодильник?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце"];

let  answer= randomArrayValue(answers)
 let question = randomArrayValue(questions)
function randomArrayValue(array) {
  let number= Math.round(Math.random()*(array.length-1)); 
          return array[number];
}
alert(question + ": " + answer);
