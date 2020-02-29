const inputBtn = document.querySelector('.sendBtn');
const inputField = document.querySelector('.input');
const display = document.querySelector('.history');

let chatHistory = [];
let chatElement = {};
chatElement.timeStamp = new Date().toLocaleTimeString();
    
//when click event, push into array object and display it into the history
function whenClicked() {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';

    if (inputField.value == null || inputField.value == '') {
      //do nothing, empty field
    }
    else {
      chatElement.messege = inputField.value;
      chatHistory.push(chatElement);
      li.appendChild(document.createTextNode(chatElement.timeStamp + " - " + chatElement.messege + ' '));
      li.appendChild(deleteBtn);
      
      display.appendChild(li);
      inputField.value= ''; //clear the input field for the next messege;
      console.log(deleteBtn);
    }
}

//when "press to send" is pressed messege is added to history and displayed to the screen
inputBtn.addEventListener('click', whenClicked);

//when Enter is pressed messege is added to history and displayed to the screen;
document.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
    whenClicked();
  }
});



