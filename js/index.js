const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    collapsibles.forEach((item) => {
      if (item !== this) item.classList.remove("collapsible--expanded");
    });

    this.classList.toggle("collapsible--expanded");
  });
});

// onClick:
// vertical alignment - bottom
// lower the position of the span a little
// lower the position of the input a little

// Out of focus
// hide span
// const email = document.querySelector(".email");

// email.addEventListener("click", function () {
//   this.firstElementChild.classList.add("show-span");
//   this.lastElementChild.classList.add("shift-input");
//   this.lastElementChild.placeholder = "";
// });

// document.addEventListener("click", function () {
//   email.firstElementChild.classList.remove("show-span");
//   email.lastElementChild.classList.remove("shift-input");
//   email.lastElementChild.placeholder = "Email address";
//   console.log("hello");
// });

// console.log(email);
// const email = document.querySelector(".email");

// Click event handler for the .email element
// function handleEmailClick(event) {
//   event.stopPropagation(); // Prevent the click event from propagating to the document
//   this.firstElementChild.classList.add("show-span");
//   this.lastElementChild.classList.add("shift-input");
//   this.lastElementChild.placeholder = "";
// }

// Document click event handler to remove classes when clicked outside the .email element
// function handleDocumentClick(event) {
//   if (!email.contains(event.target)) {
//     email.firstElementChild.classList.remove("show-span");
//     email.lastElementChild.classList.remove("shift-input");
//     email.lastElementChild.placeholder = "Email address";
//   }
// }

// Add click event listener to the .email element
// email.addEventListener("click", handleEmailClick);

// // Add click event listener to the document to handle clicks outside the .email element
// document.addEventListener("click", handleDocumentClick);

const email = document.querySelector(".email");

// Click event handler for the .email element
function handleEmailClick(event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  this.firstElementChild.classList.add("show-span");
  this.lastElementChild.classList.add("shift-input");
  this.classList.add("email-focus");
  this.lastElementChild.placeholder = "";
}

// Document click event handler to remove classes when clicked outside the .email element
function handleDocumentClick() {
  email.firstElementChild.classList.remove("show-span");
  email.lastElementChild.classList.remove("shift-input");
  email.classList.remove("email-focus");
  email.lastElementChild.placeholder = "Email address";
}

// Add click event listener to the .email element
email.addEventListener("click", handleEmailClick);

// Add click event listener to the document to handle clicks outside the .email element
document.addEventListener("click", handleDocumentClick);
