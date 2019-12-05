import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';

const initialState = {
  listItems: [
    { label: 'Do workout', id: 0, marked: false },
    { label: 'Go to the shop', id: 1, marked: false },
    { label: 'Buy vegetarians', id: 2, marked: false },
    { label: 'Drink water', id: 3, marked: false },
    { label: 'Learn JavaScript', id: 4, marked: false },
  ],
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
