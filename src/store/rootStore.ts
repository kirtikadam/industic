import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/rootReducer"
const logger = createLogger();


export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, {},
  composeWithDevTools(applyMiddleware(logger)))

