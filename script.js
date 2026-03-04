const ratingButtons = document.querySelectorAll('.rating');
const submitButton = document.querySelector('.btn');
const stateRating = document.querySelector('.state-rating');
const stateThankYou = document.querySelector('.state-thankyou');

let selectedRating = 0;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedRating = parseInt(button.textContent);
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating === 0) {
    alert('Please select a rating before submitting.');
    return;
  }

  stateRating.style.display = 'none';
  stateThankYou.style.display = 'flex';
  document.querySelector('.selected-rating').textContent = `You selected ${selectedRating} out of 5`;
});

