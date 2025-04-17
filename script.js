function showMessage() {
  alert("Welcome to my profile!");
}

function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector('button[onclick="toggleDarkMode()"]');

  // Toggle the dark-mode class on the body
  body.classList.toggle("dark-mode");

  // Update the button text based on the current mode
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Toggle Light Mode";
  } else {
    button.textContent = "Toggle Dark Mode";
  }
}
