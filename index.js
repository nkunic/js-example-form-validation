// Import stylesheets & scripts
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
var validFeedback = document.querySelectorAll('.valid-feedback');
var invalidFeedback = document.querySelectorAll('.invalid-feedback');

function formValidation(event) {
  // USER DATA
  var userData = {
    usernameVal: usernameInput.value,
    passwordVal: passwordInput.value,
    emailVal: emailInput.value,
  };

  // ERRORS
  //var errorData = [];
  var errorData = {
    validFeedback: 'Looks good!',
    usernameErrorPresent: 'Please enter an Username',
    usernameErrorValid:
      'Username too long. Max 20 characters allowed. Please try again.',
    passwordErrorPresent: 'Please enter a Password',
    passwordErrorValid: 'Password not correct. Please try again.',
    emailErrorPresent: 'Please enter an Email.',
    emailErrorValid: 'You must use Gmail. Please try again.',
  };

  // USERNAME
  // var usernameVal = usernameInput.value;
  // console.log(usernameVal);
  if (userData.usernameVal === '') {
    usernameInput.style.border = '1px solid tomato';
    invalidFeedback[0].style.display = 'block';    
    invalidFeedback[0].innerText = errorData.usernameErrorPresent;
  } else if (userData.usernameVal.length > 20) {
    // errorData.push('Username too long. Max 20 characters allowed.');
    usernameInput.style.border = '1px solid tomato';
    invalidFeedback[0].style.display = 'block';    
    invalidFeedback[0].innerText = errorData.usernameErrorValid;
  } else {
    usernameInput.style.border = '1px solid green';
    invalidFeedback[0].style.display = 'none';   
    validFeedback[0].style.display = 'block';   
    validFeedback[0].innerText = errorData.validFeedback;
  }

  // PASSWORD
  // var passwordVal = passwordInput.value;
  // console.log(passwordVal);
  if (userData.passwordVal === '') {
    passwordInput.style.border = '1px solid tomato';
    invalidFeedback[1].style.display = 'block';    
    invalidFeedback[1].innerText = errorData.passwordErrorPresent;
  } else if (userData.passwordVal !== '' && userData.passwordVal != '12345') {
    // errorData.push('Password not correct. Please try again.');
    passwordInput.style.border = '1px solid tomato';
    invalidFeedback[1].style.display = 'block';    
    invalidFeedback[1].innerText = errorData.passwordErrorValid;
  } else {
    // passwordInput.style.border = '1px solid green';
    passwordInput.style.border = '1px solid green';
    invalidFeedback[1].style.display = 'none';   
    validFeedback[1].style.display = 'block';   
    validFeedback[1].innerText = errorData.validFeedback;
  }

  // EMAIL
  // var emailVal = emailInput.value;
  // console.log(emailVal);
  if (userData.emailVal.indexOf('@gmail.com') == -1) {
    // emailInput.style.border = '1px solid tomato';
    // errorData.push('You must use Gmail.');
    invalidFeedback[2].innerText = errorData.emailErrorValid;
  } else {
    // emailInput.style.border = '1px solid green';
    validFeedback.innerText = errorData.validFeedback;
  }

  // CHECK FOR ERRORS

  // if (errorData.length != 0) {
  //   event.preventDefault();
  // } else {
  //   form.submit();
  // }

  // if (!form.checkValidity()) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   form.classList.add('was-validated');
  // } else {
  //   form.submit();
  // }
}

btn.addEventListener('click', formValidation);
