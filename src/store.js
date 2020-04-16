import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const initialState = { listItems: [] };

const store = createStore(
  todoReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
