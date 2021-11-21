import { combineReducers } from 'redux'; // importe o combineReducers para unificar quantos reducers precisar
// import , quando criados, os reducers necessários para combiná-los aqui.
import user from './user';

const rootReducer = combineReducers({ // combinando dois reducers importados do mesmo diretório
  user,
});

export default rootReducer;
