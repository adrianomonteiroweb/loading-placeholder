import { createStore, applyMiddleware } from 'redux'; // import além de 'createStore', para criar sua store, a 'applyMiddleware' de 'redux' para que sua aplicação consiga trabalhar actions de forma assíncrona.
import thunk from 'redux-thunk'; // importando também thunk de 'redux-thunk', ativando dentro da 'applyMiddleWare' no seu 'composeWithDevTools'.
import { composeWithDevTools } from 'redux-devtools-extension'; // junto a extensão em seu chrome, poderá trabalhar e monitorar suas actions e estado em tempo real.
import rootReducer from '../reducers/index'; // você importará rootReducer de 'redux/reducers' quando tiver criado. Ele combinará em 1 reducer principal todos os seus reducers necessários. 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
