export const users = {
  get() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((resp) => resp);
  }
};
