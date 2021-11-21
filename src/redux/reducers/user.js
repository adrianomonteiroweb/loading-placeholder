import { SET_LOGIN } from '../actions'; // importa a action

const INITIAL_STATE = { // inicia um estado
  email: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return { ...state, email: action.payload }; // seta o email quando a action setLogin for acionada em alguma página ou componente da aplicação.
  default:
    return state; // caso a action.type não for a 'SET_LOGIN', ela mantém o estado sem alteração retornando o próprio 'state'.
  }
};

export default reducer;
