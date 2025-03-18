// Get form and input elements
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

// Form submission event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get user inputs
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());

  // Validate inputs
  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // Create a promise to handle age validation
  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution or rejection
  ageCheckPromise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});