const phrasesContainer = document.getElementById('phrases');
const checkOrderButton = document.getElementById('checkOrder');
const resultText = document.getElementById('result');

const correctOrder = [
  "tremble before bast",
  "armed and dangerous",
  "we are undefeatable",
  "cho no mai o kurae"
];

// Allow phrases to be draggable
phrasesContainer.querySelectorAll('.phrase').forEach(phrase => {
  phrase.draggable = true;
  phrase.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', phrase.dataset.phrase);
  });
});

// Allow phrases to be dropped
phrasesContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
});

phrasesContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  const draggedPhrase = e.dataTransfer.getData('text/plain');
  const targetPhrase = e.target.closest('.phrase');
  if (targetPhrase) {
    const temp = targetPhrase.dataset.phrase;
    targetPhrase.dataset.phrase = draggedPhrase;
    targetPhrase.textContent = draggedPhrase;
    e.target.closest('.phrase').dataset.phrase = temp;
    e.target.closest('.phrase').textContent = temp;
  }
});

// Check the order
checkOrderButton.addEventListener('click', () => {
  const currentOrder = Array.from(phrasesContainer.querySelectorAll('.phrase')).map(p => p.dataset.phrase);
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    resultText.textContent = "Your journey continues, so sail the sea, In search of treasure, the clue’s in the spree. Find the book where pirates roam, One Piece, Volume 100, is your next home.";
  } else {
    resultText.textContent = "Incorrect order. Keep trying!";
  }
});
