
// Show popup after 5 seconds
setTimeout(() => {
  document.getElementById('popup').style.display = 'block';
}, 10000);

// Close popup when clicking the X button

document.querySelector('.close-btn').addEventListener('click', () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=918295139188&text=i%20am%20a%20student';
});