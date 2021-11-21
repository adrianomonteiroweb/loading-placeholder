import data from './userData';

localStorage.setItem('user', JSON.stringify(data));

const readUser = () => JSON.parse(localStorage.getItem('user'));
const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

const TIMEOUT = 3000;
const SUCCESS_STATUS = 'OK';

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// --------------------------------------------------------------------

const requestSimulation = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getUser = () => (
  new Promise((resolve) => {
    const user = readUser();
    requestSimulation(user)(resolve);
  })
);

export const getUserById = (userId) => {
  const user = readUser().find((u) => u.id === parseInt(userId, 10));
  return new Promise((resolve) => {
    requestSimulation(user)(resolve);
  });
};

export const updateUser = (updatedUser) => (
  new Promise((resolve) => {
    const user = readMovies().map((u) => {
      if (u.id === parseInt(updatedMovie.id, 10)) {
        return { ...u, ...updatedUser };
      }
      return u;
    });
    saveUser(user);
    requestSimulation(SUCCESS_STATUS)(resolve);
  })
);

export const createUser = (userData) => (
  new Promise((resolve) => {
    let user = readUser();
    const nextId = user[user.length - 1].id + 1;
    const newUser = { ...userData, id: nextId };
    user = [...user, newUser];
    saveUser(user);
    requestSimulation(SUCCESS_STATUS)(resolve);
  })
);

export const deleteUser = (userId) => {
  let user = readUser();
  user = user.filter((u) => u.id !== parseInt(userId, 10));
  saveUser(user);

  return new Promise((resolve) => {
    requestSimulation({ status: SUCCESS_STATUS })(resolve);
  });
};
