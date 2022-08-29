const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let files = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg"  
];

let alts = [
    "pic1",
    "pic2",
    "pic3",
    "pic4",
    "pic5"
];

for(let i = 0; i < files.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/" + files[i]);
  newImage.setAttribute('alt', alts[i]);
  thumbBar.appendChild(newImage);
 
}

thumbBar.addEventListener('click', (e) => {
    displayedImage.src=e.target.src;
})

btn.addEventListener('click', (e) => {
    if(e.target.innerText === "Darken") {
        e.target.innerText = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        e.target.innerText = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    };
})