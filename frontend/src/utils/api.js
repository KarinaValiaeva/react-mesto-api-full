const onError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(onError);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(onError);
  }

  postCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(onError);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(onError);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(onError);
  }

  addLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(onError);
  }

  deleteLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(onError);
  }

  setUserAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(onError);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(onError);
  }
}

const api = new Api({
  baseUrl: "https://api.mesto.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
