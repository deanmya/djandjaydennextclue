// Original phrases
const phrases = [
  "tremble before bast",
  "armed and dangerous",
  "we are undefeatable",
  "cho no mai o kurae"
];

// Function to scramble a phrase
function scramblePhrase(phrase) {
  return phrase
    .split('') // Convert to array of characters
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .join(''); // Convert back to string
}

// Function to display scrambled phrases
function displayScrambledPhrases() {
  const phrasesContainer = document.getElementById('phrases');
  phrasesContainer.innerHTML = ''; // Clear any existing content

  phrases.forEach((phrase, index) => {
    const scrambledPhrase = scramblePhrase(phrase);

    const phraseDiv = document.createElement('div');
    phraseDiv.className = 'phrase';

    const phraseLabel = document.createElement('p');
    phraseLabel.textContent = `Phrase ${index + 1}: ${scrambledPhrase}`;

    const phraseInput = document.createElement('input');
    phraseInput.type = 'text';
    phraseInput.placeholder = 'Type the unscrambled phrase here...';
    phraseInput.dataset.correctAnswer = phrase; // Store the correct answer

    phraseDiv.appendChild(phraseLabel);
    phraseDiv.appendChild(phraseInput);
    phrasesContainer.appendChild(phraseDiv);
  });
}

// Function to check answers
function checkAnswers() {
  const inputs = document.querySelectorAll('.phrase input');
  let allCorrect = true;

  inputs.forEach(input => {
    if (input.value.toLowerCase() !== input.dataset.correctAnswer.toLowerCase()) {
      allCorrect = false;
      input.style.borderColor = 'red'; // Highlight incorrect answers
    } else {
      input.style.borderColor = 'green'; // Highlight correct answers
    }
  });

  const resultText = document.getElementById('result');
  if (allCorrect) {
    resultText.textContent = "Your journey continues, so sail the sea, In search of treasure, the clue’s in the spree. Find the book where pirates roam, One Piece, Volume 100, is your next home.";
  } else {
    resultText.textContent = "Some answers are incorrect. Keep trying!";
  }
}

// Display scrambled phrases when the page loads
window.onload = displayScrambledPhrases;

// Add event listener to the "Check Answers" button
document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
