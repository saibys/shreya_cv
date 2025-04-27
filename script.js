
// Show popup after 5 seconds
setTimeout(() => {
  document.getElementById('popup').style.display = 'block';
}, 5000);

// Close popup when clicking the X button
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
  if (e.target == document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
  }
});
