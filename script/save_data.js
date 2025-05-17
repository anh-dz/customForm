const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
const nameInput = document.getElementById('inputName');
const feelInput = document.getElementById('inputFeel');
const memoryInput = document.getElementById('inputMemories');
const noteInput = document.getElementById('inputNote');

const btnDeleteData = document.getElementById("deleteDataBtn");

let darkModeEnabled = localStorage.getItem('darkMode') === 'true';
let savedData = JSON.parse(localStorage.getItem("memoryNote")) || {};


window.onload = function () {
  if (Object.keys(savedData).length > 0) {
    btnDeleteData.style.color = "rgb(229, 80, 80)";
    nameInput.value = savedData.name || "";
    feelInput.value = savedData.feel || "";
    memoryInput.value = savedData.memory || "";
    noteInput.value = savedData.note || "";
    const showSteps = nameInput.value.trim() !== '';
    hiddenSteps.forEach(div => {
      div.style.display = showSteps ? 'block' : 'none';
    });
  
    checkAllFilled(); 
  }
};

body.classList.toggle('dark-mode', darkModeEnabled);

btnDeleteData.addEventListener("click", () => {
  if (darkModeEnabled) {
    btnDeleteData.style.color = "rgba(255, 255, 255, 0.26)";
  } else {
    btnDeleteData.style.color = "rgba(0, 0, 0, 0.26)";
  }
	localStorage.clear();
  savedData = {};
});

toggleBtn.addEventListener('click', () => {
  darkModeEnabled = !darkModeEnabled;
  body.classList.toggle('dark-mode', darkModeEnabled);
  localStorage.setItem('darkMode', darkModeEnabled);
  if (Object.keys(savedData).length == 0) {
    btnDeleteData.style.color = darkModeEnabled ? "rgba(255, 255, 255, 0.26)" : "rgba(0, 0, 0, 0.26)";
  } else {
    btnDeleteData.style.color = "rgb(229, 80, 80)";
  }
});

const btnSave = document.getElementById("saveBtn");

btnSave.addEventListener("click", () => {
  if (nameInput.value != "" || feelInput.value != "" || memoryInput.value != "" || noteInput.value != "") {
    savedData = {
      name: nameInput.value,
      feel: feelInput.value,
      memory: memoryInput.value,
      note: noteInput.value
    };
    localStorage.setItem("memoryNote", JSON.stringify(savedData));
    btnDeleteData.style.color = "rgb(229, 80, 80)";
  }
});

// all intermediate cards (step 2–4)
const hiddenSteps = document.querySelectorAll('.hiddenDiv:not(#finalCard)');
// final “send” card
const finalCard = document.getElementById('finalCard');

/**
 * Check whether all four text inputs have non-empty values.
 * If yes → show finalCard; otherwise → hide it.
 */
function checkAllFilled() {
const allFilled = [ nameInput, feelInput, memoryInput, noteInput ]
  .every(input => input.value.trim() !== '');

finalCard.style.display = allFilled ? 'block' : 'none';
}

// 1) When user types their name → show/hide the intermediate steps:
nameInput.addEventListener('input', () => {
const showSteps = nameInput.value.trim() !== '';
hiddenSteps.forEach(div => {
  div.style.display = showSteps ? 'block' : 'none';
});

// also re-evaluate final card in case name was cleared
checkAllFilled();
});

// 2) Whenever any of the other three inputs changes → re-check final card:
[ feelInput, memoryInput, noteInput ].forEach(inputEl => {
  inputEl.addEventListener('input', checkAllFilled);
});
