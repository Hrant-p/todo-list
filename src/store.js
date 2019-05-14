import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import reducer from "./reducer/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


const initialState = {
    listItems: [
          { label: "Do workout", id: 0 },
          { label: "Go to the shop", id: 1 },
          { label: "Buy vegetarians", id: 2 },
          { label: "Drink water", id: 3 },
          { label: "Learn JavaScript", id: 4 }
      ]
};


export const store = createStore(reducer,
     initialState,
      composeWithDevTools(applyMiddleware(thunk)));
