// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './css/style.css';

// Write Javascript code!

var usernameInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var emailInput = document.querySelector('input[type="email"]');
//var btn = document.querySelector('input[type="submit"]');
var btn = document.querySelector('button');
var form = document.querySelector('form');
var validFeedback = document.querySelector('.valid-feedback');
var invalidFeedback = document.querySelector('.invalid-feedback');

function formValidation(event) {

  // User data
  var userData = {
    usernameVal: usernameInput.value,
    passwordVal: passwordInput.value,
    emailVal: emailInput.value,
  };

  // Errors
  //var errorData = [];
  var errorData = {
    validFeedback: 'Looks good!',
    usernameErrorPresent: 'Please enter an Username',
    usernameErrorValid: 'Username too long. Max 20 characters allowed. Please try again.',
    passwordErrorPresent: 'Please enter a Password',
    passwordErrorValid: 'Password not correct. Please try again.',
    emailErrorPresent: 'Please enter an Email.',
    emailErrorValid: 'You must use Gmail. Please try again.',
  };

  // Username
  // var usernameVal = usernameInput.value;
  // console.log(usernameVal);
  if (userData.usernameVal === '' || userData.usernameVal.length > 20) {
    usernameInput.style.border = '1px solid tomato';
    // errorData.push('Username too long. Max 20 characters allowed.');
  } else {
    usernameInput.style.border = '1px solid green';
    validFeedback.innerText = errorData.validFeedback;
  }

  // Password
  // var passwordVal = passwordInput.value;
  // console.log(passwordVal);
  if (userData.passwordVal != '12345') {
    passwordInput.style.border = '1px solid tomato';
    // errorData.push('Password not correct. Please try again.');
  } else {
    passwordInput.style.border = '1px solid green';
    validFeedback.innerText = errorData.validFeedback;
  }

  // Email
  // var emailVal = emailInput.value;
  // console.log(emailVal);
  if (userData.emailVal.indexOf('@gmail.com') == -1) {
    emailInput.style.border = '1px solid tomato';
    // errorData.push('You must use Gmail.');
  } else {
    emailInput.style.border = '1px solid green';
    validFeedback.innerText = errorData.validFeedback;
  }

  // Check for errors
  if (errorData.length != 0) {
    event.preventDefault();
  } else {
    form.submit();
  }
}

btn.addEventListener('click', formValidation);
