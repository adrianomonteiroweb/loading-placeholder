export const SET_LOGIN = 'SET_LOGIN'; // Define o type da action.

export const setLogin = (payload) => ({ // Recebe em payload o novo objecto vindo via parâmetro da execução da action 'setLogin' em algum ponto da aplicação.
  type: SET_LOGIN, payload,
});
