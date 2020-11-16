//Tutorial https://www.youtube.com/watch?v=POX3dT-pB4E

const typewriter = function(writer, words, wait = 3000) {
    this.writer = writer;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type writter method
typewriter.prototype.type = function() {
    //Current word index
    const i = this.wordIndex % this.words.length;
    //Get full text current word
    const fullWord = this.words[i];
    //Check if deleting
    if(this.isDeleting) {
        //Remove character
        this.txt = fullWord.substring(0, this.txt.length - 1);
    } else {
        //Add character
        this.txt = fullWord.substring(0, this.txt.length + 1);
    }

    //Insert into element
    this.writer.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial type speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2; 
    }

    //Check if word is complete
    if(!this.isDeleting && this.txt === fullWord) {
        //Make a pause at end of word
        typeSpeed = this.wait;
        //Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false
        //Move to next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;

    }

    setTimeout(() => this.type(), typeSpeed)
}

//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const writer = document.querySelector('.typewriter');
    const words = JSON.parse(writer.getAttribute('data-words'));
    const wait = writer.getAttribute('data-wait');
    //Init typewritter
    new typewriter(writer, words, wait);
}