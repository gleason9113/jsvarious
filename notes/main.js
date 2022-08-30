let title = document.querySelector('#title');
let content = document.querySelector('#content');
let color = document.querySelector('#color-menu');
let subBtn = document.querySelector('#submit');
let clrBtn = document.querySelector('#clear');
let value = $('#dropDownId :selected').text();
console.log(value);

class Note {
    constructor (title, note, color) {
        this.title = title;
        this.note = note;
        this.color = color;
    }
}





subBtn.addEventListener('click', () => {
    let newNote = new Note(title.value, content.value, "red");
    console.log(newNote);
    console.log(color);
})