// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './css/style.css';

// Write Javascript code!

var usernameInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var emailInput = document.querySelector('input[type="email"]');
var btn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');

function formValidation(event) {
  // User data
  var userData = {
    usernameVal: usernameInput.value,
    passwordVal: passwordInput.value,
    emailVal: emailInput.value,
  };

  // Errors
  var errors = [];

  // Username
  // var usernameVal = usernameInput.value;
  // console.log(usernameVal);
  if (userData.usernameVal === '' || userData.usernameVal.length > 20) {
    usernameInput.style.border = '1px solid tomato';
    errors.push('Username too long. Max 20 characters allowed.');
  }

  // Password
  // var passwordVal = passwordInput.value;
  // console.log(passwordVal);
  if (userData.passwordVal != '12345') {
    passwordInput.style.border = '1px solid tomato';
    errors.push('Password not correct. Please try again.');
  }

  // Email
  // var emailVal = emailInput.value;
  // console.log(emailVal);
  if (userData.emailVal.indexOf('@gmail.com') == -1) {
    emailInput.style.border = '1px solid tomato';
    errors.push('You must use Gmail.');
  }

  // Check for errors
  if (errors.length != 0) {
    // Has errors: prevent default until form validated
    event.preventDefault();
  } else {
    // All ok: form submit
    form.submit();
  }
}

btn.addEventListener('click', formValidation);
