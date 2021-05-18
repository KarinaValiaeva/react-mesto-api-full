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
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers }).then(
      onError
    );
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(
      onError
    );
  }

  postCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(onError);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(onError);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(onError);
  }

  addLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: this.headers,
    }).then(onError);
  }

  deleteLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(onError);
  }

  setUserAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(onError);
  }

   changeLikeCardStatus(id, isLiked){
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: (isLiked) ? "PUT" : "DELETE",
      headers: this.headers,
    }).then(onError);
  }
  
}

const api = new Api({
  baseUrl: "http://api.mesto.nomoredomains.rocks",
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
});



export default api;