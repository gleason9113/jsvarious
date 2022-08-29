const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const xItem = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
]

const yItem = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
]

const zItem = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let name;
  if(customName.value !== '') {
    name = customName.value;
  } else {
    name = "FillerName";
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
  }

  let xInsert = randomValueFromArray(xItem);
  let yInsert = randomValueFromArray(yItem);
  let zInsert = randomValueFromArray(zItem);

  let temp = "94 Fahrenheit";
  let weight = "300 lbs";

  let uk = document.getElementById('uk'); 
  console.log(uk);
  if(uk.checked) {
    temp = Math.round((94 - 32) * (5/9)) + " Celsius";
    weight = Math.round((300 / 14)) + " stone";
  } 

  let storyText = `It was ${temp} outside, so ${xInsert} went for a walk. 
  When they got to ${yInsert}, they stared in horror for a few moments, then ${zInsert}. 
  ${name} saw the whole thing, but was not surprised — ${xInsert} weighs ${weight}, and it was a hot day.`
  story.textContent = storyText;
  story.style.visibility = 'visible';
}