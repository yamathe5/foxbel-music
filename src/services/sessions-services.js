const tokenKey = "FoxbelMusic";
export function logout() {
  sessionStorage.removeItem(tokenKey);
}
