// auth.js
isAuthenticated = localStorage.getItem('authenticated') === 'true';
isAuthenticated2 = localStorage.getItem('authenticated2') === 'true';
isAuthenticated3 = localStorage.getItem('authenticated3') === 'true';

let isAuthenticated = false;
let isAuthenticated2 = false;
let isAuthenticated3 = false;
let authToken = null;
let authToken2 = null;
let authToken3 = null;

export function checkAuthentication() {
  return isAuthenticated;
}

export function checkAuthentication2() {
  return isAuthenticated2;
}

export function checkAuthentication3() {
  return isAuthenticated3;
}

export function setAuthentication(status, token) {
  isAuthenticated = status;
  authToken = token;
}

export function setAuthentication2(status, token) {
  isAuthenticated2 = status;
  authToken2 = token;
}

export function setAuthentication3(status, token) {
  isAuthenticated3 = status;
  authToken3 = token;
}

export function checkToken() {
  return authToken;
}

export function checkToken2() {
  return authToken2;
}

export function checkToken3() {
  return authToken3;
}
