// auth.js
isAuthenticated = localStorage.getItem('authenticated') === 'true';
isAuthenticated2 = localStorage.getItem('authenticated2') === 'true';

let isAuthenticated = false;
let isAuthenticated2 = false;
let authToken = null;

export function checkAuthentication() {
  return isAuthenticated, isAuthenticated2;
}

export function checkAuthentication2() {
  return isAuthenticated2;
}

export function setAuthentication(status, token) {
  isAuthenticated = status;
  authToken = token;
}

export function setAuthentication2(status, token) {
  isAuthenticated2 = status;
  authToken = token;
}

export function checkToken() {
  return authToken;
}
