export const users = {
  get() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json());
  },

  find(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json());
  }
};
