export const BASE_URL = "http://api.mesto.nomoredomains.rocks";

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res);

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
  //  "credentials": "include", ///////////////////////////////////////////
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
}).then(checkResponse);

};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
  //  "credentials": "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};