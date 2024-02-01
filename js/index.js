const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    collapsibles.forEach((item) => {
      if (item !== this) item.classList.remove("collapsible--expanded");
    });

    this.classList.toggle("collapsible--expanded");
  });
});

// *********** START ***************

let activeEmail = null;

// Document click event handler to remove classes when clicked outside any .email element
function handleDocumentClick(event) {
  const clickedEmail = event.target.closest(".email");

  // Check if the clicked element is within any .email element
  if (!clickedEmail) {
    resetEmailState(activeEmail);
  }
}

// Click event handler for the .email element
function handleEmailClick(event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document

  // Reset the state of the previously active email
  if (activeEmail && activeEmail !== this) {
    resetEmailState(activeEmail);
  }

  // Set the current email as the active one
  activeEmail = this;

  this.firstElementChild.classList.add("show-span");
  this.lastElementChild.classList.add("shift-input");
  this.classList.add("email-focus");
  this.lastElementChild.placeholder = "";
}

// Function to reset the state of an email element
function resetEmailState(emailElement) {
  if (emailElement) {
    emailElement.firstElementChild.classList.remove("show-span");
    emailElement.lastElementChild.classList.remove("shift-input");
    emailElement.classList.remove("email-focus");
    emailElement.lastElementChild.placeholder = "Email address";
  }
}

// Add click event listener to each .email element
document.querySelectorAll(".email").forEach((emailInstance) => {
  // Add click event listener to each .email element
  emailInstance.addEventListener("click", handleEmailClick);
});

// Add click event listener to the document to handle clicks outside any .email element
document.addEventListener("click", handleDocumentClick);

// ****************** END ***************************
