// Audio Setup
const pianoKeys = document.querySelectorAll(".piano-keys .key");
let allKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
let audio = new Audio();

// Function to play sound
const playTune = (index) => {
  audio.src = `sounds/${allKeys[index]}.wav`; // Assuming sounds are in the 'sounds' folder
  audio.play();

  const clickedKey = pianoKeys[index];
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// Add event listener for each key
pianoKeys.forEach((key, index) => {
  key.addEventListener("click", () => playTune(index));
});
