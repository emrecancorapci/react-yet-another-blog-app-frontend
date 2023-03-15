interface Token {
  id: number;
  userName: string;
  token: string;
}

/**
 * Get jwt token from session storage
 * @return {string}
 */

function getToken(): Token {
  const storage = sessionStorage.getItem('user');
  return storage !== null ? JSON.parse(storage) : null;
}

export default getToken;
