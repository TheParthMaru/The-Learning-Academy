"use strict";

const form = document.querySelector("#signup");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get the values from input
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  console.log(emailValue);
  console.log(passwordValue);
  console.log(password2Value);

  if (firstNameValue === "") {
    // add and display error class
    setErrorFor(firstName, "First Name cannot be blank");
  } else {
    //add and display success class
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    // add and display error class
    setErrorFor(lastName, "Last Name cannot be blank");
  } else {
    //add and display success class
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    // add and display error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    //add and display success class
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Please Confirm Password");
  } else if (passwordValue != password2Value) {
    setErrorFor(password2, "Passwords do no match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  // Targetting the .form-field
  const formField = input.parentElement;
  const small = formField.querySelector("small");

  // Added error msg
  small.innerText = message;

  // Adding error class
  formField.className = "form-field error";
}

function setSuccessFor(input) {
  // Targetting the .form-control
  const formField = input.parentElement;

  // Adding success class
  formField.className = "form-field success";
}

function isEmail(emailValue) {
  return /^[a-zA-Z]{3,30}[@][a-zA-Z]{3,7}[.][a-zA-Z]{2,3}$/.test(emailValue);
}
