import { ADD_ITEM, REMOVE_ITEM } from '../action/type';

const initialState = {
  listItems: [
          { label: "Do workout", id: 0 },
          { label: "Go to the shop", id: 1 },
          { label: "Buy vegetarians", id: 2 },
          { label: "Drink water", id: 3 },
          { label: "Learn JavaScript", id: 4 }
      ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
                return {
                    listItems: [...state.listItems, {label: action.payload, id: state.listItems.length}]
                }
        default: 
            return state;
    }
};

export default reducer;
