const toTopButton = document.getElementById('to-top');

// Add a click event listener to the button
toTopButton.addEventListener('click', function() {
  // Scroll the window to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This makes the scroll animated and smooth
  });
});