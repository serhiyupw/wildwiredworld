// auth.js

let isAuthenticated = false;
let authToken = null;

export function checkAuthentication() {
  return isAuthenticated;
}

export function setAuthentication(status, token) {
  isAuthenticated = status;
  authToken = token;
}

export function checkToken() {
  return authToken;
}
