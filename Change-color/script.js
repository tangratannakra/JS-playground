// create a function that changes randomly the BODY color on event
//clicking on button;
const mainBtn = document.querySelector('.mainBtn');
const bodyElement = document.querySelector('body');
const info = document.querySelector('p.info');


//generate a a value between 0 255
function generateColor(){
   return Math.floor(Math.random() * 256) ;
}

function changeColor() {
    //on click change color or bodyElement
    //creates a string with rgb and rgb values for R,G,B
    //const rgb = "rgb(" + generateColor() + "," + generateColor() + "," + generateColor() + ")";
    //bodyElement.style.backgroundColor = rgb;

    //second method with generated hex color 
    let hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = '#';

    for (let i=0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length );
        hexColor += hexNumbers[random];
    }

    bodyElement.style.backgroundColor = hexColor;
}


mainBtn.addEventListener('click', changeColor);