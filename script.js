document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYouContainer = document.getElementById("thankYouContainer");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Display thank you message
    hide.style.display = "none";
    contactForm.style.display = "none";
    thankYouContainer.style.display = "block";
    thankYouContainer.classList.add("fadeIn"); // Add fade-in animation class
    form.reset();
  });
});
