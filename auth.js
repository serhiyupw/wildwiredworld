// auth.js
let isAuthenticated = false;

export function checkAuthentication() {
  return isAuthenticated;
}

export function setAuthentication(status) {
  isAuthenticated = status;
}
 