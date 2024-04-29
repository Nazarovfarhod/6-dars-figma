document.addEventListener("DOMContentLoaded", function(event) {
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider-container img');
  const totalImages = images.length;

  // Function to show the current image and hide others
  function showImage(index) {
      images.forEach((image, i) => {
          if (i === index) {
              image.classList.add('active');
          } else {
              image.classList.remove('active');
          }
      });
  }

  // Set interval to change images every 2 seconds
  const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
  }, 2000);

  // Add event listeners to control buttons
  document.getElementById('prevButton').addEventListener('click', function() {
      clearInterval(intervalId);
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
  });

  document.getElementById('nextButton').addEventListener('click', function() {
      clearInterval(intervalId);
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
  });
});