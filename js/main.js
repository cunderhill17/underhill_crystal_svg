console.log('JS File is attached');

//Variables

let icons = document.querySelectorAll('.icon-wrap svg');


//Functions

function displayId() {
    console.log(this.id);
}

//Event Listeners 

icons.forEach(icon => icon.addEventListener('click', displayId));