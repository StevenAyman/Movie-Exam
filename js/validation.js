'use strict';

// Function to validate the name
export function validateName() {
  const regex = /^[^±!\][@\-£$%^()&*"'_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/;
  return regex.test($('#name').val());
}
// Function to validate the email
export function validateEmail() {
  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test($('#email').val());
}

// Function to validate the phone
export function validatePhone() {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regex.test($('#phone').val());
}

// Function to validate the age
export function validateAge() {
  const regex = /^[1-9][0-9]?$|^100$/;
  return regex.test($('#age').val());
}

// Function to validate the age
export function validatePassword() {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  console.log(regex.test($('#password').val()));
  return regex.test($('#password').val());
}
// Function to validate the age
export function validateRePassword() {
  return $('#password-check').val() === $('#password').val();
}
