export const users = {
  get() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json());
  },

  getById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json());
  }
};
