var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

<<<<<<< HEAD
const imageUrl = "https://media-exp2.licdn.com/dms/image/C4D03AQHQTMhVT8pp_A/profile-displayphoto-shrink_800_800/0/1652970966451?e=1661990400&v=beta&t=FN92by-znwGiFOLIkhhZQvQsNWyMxj8PGCCU4HcF-os";
fetch(imageUrl)
    .then(response => response.blob())
    .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
    });
=======
const history = document.getElementById('history');
const input = document.getElementById('input');
const cursor = document.getElementById('cursor');

function focusAndMoveCursorToTheEnd(e) {  
  input.focus();
  
  const range = document.createRange();
  const selection = window.getSelection();
  const { childNodes } = input;
  const lastChildNode = childNodes && childNodes.length - 1;
  
  range.selectNodeContents(lastChildNode === -1 ? input : childNodes[lastChildNode]);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
}

function handleCommand(command) {
  const line = document.createElement('DIV');
  
  line.textContent = `> ${ command }`;
  
  history.appendChild(line);
}

// Every time the selection changes, add or remove the .noCursor
// class to show or hide, respectively, the bug square cursor.
// Note this function could also be used to enforce showing always
// a big square cursor by always selecting 1 character from the current
// cursor position, unless it's already at the end, in which case the
// #cursor element should be displayed instead.
document.addEventListener('selectionchange', () => {
  if (document.activeElement.id !== 'input') return;
  
  const range = window.getSelection().getRangeAt(0);
  const start = range.startOffset;
  const end = range.endOffset;
  const length = input.textContent.length;
  
  if (end < length) {
    input.classList.add('noCaret');
  } else {
    input.classList.remove('noCaret');
  }
});

input.addEventListener('input', () => {    
  // If we paste HTML, format it as plain text and break it up
  // input individual lines/commands:
  if (input.childElementCount > 0) {
    const lines = input.innerText.replace(/\n$/, '').split('\n');
    const lastLine = lines[lines.length - 1];
    
    for (let i = 0; i <= lines.length - 2; ++i) {
      handleCommand(lines[i]);
    }
  
    input.textContent = lastLine;
    
    focusAndMoveCursorToTheEnd();
  }
  
  // If we delete everything, display the square caret again:
  if (input.innerText.length === 0) {
    input.classList.remove('noCaret');  
  }  
});

document.addEventListener('keydown', (e) => {   
  // If some key is pressed outside the input, focus it and move the cursor
  // to the end:
  if (e.target !== input) focusAndMoveCursorToTheEnd();
});

input.addEventListener('keydown', (e) => {    
  if (e.key === 'Enter') {
    e.preventDefault();
        
    handleCommand(input.textContent);    
    input.textContent = '';
    focusAndMoveCursorToTheEnd();
  }
});

// Set the focus to the input so that you can start typing straight away:
input.focus();
>>>>>>> fb01394598c956a1c16a833a4d9825cdf09fcce3
