import { ADD_ITEM, REMOVE_ITEM, MARK_ITEM, CLEAR_ITEMS } from '../action/type';

const initialState = {
  listItems: [
    { label: "Do workout", id: 0, marked: false },
    { label: "Go to the shop", id: 1, marked: false },
    { label: "Buy vegetarians", id: 2, marked: false },
    { label: "Drink water", id: 3, marked: false },
    { label: "Learn JavaScript", id: 4, marked: false }
  ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
                return {
                  listItems: [
                    ...state.listItems,
                    { label: action.payload,
                      id: state.listItems.length,
                      marked: false }
                  ] 
                };
        case MARK_ITEM:      
            const index = state.listItems.findIndex(item => item.id === action.payload);
                state.listItems[index].marked = !state.listItems[index].marked
                    return { listItems: [...state.listItems] };

        case REMOVE_ITEM:
                const removeId = state.listItems.findIndex(item => item.id === action.payload);
                state.listItems.splice(removeId, 1)
                    return  { listItems: [...state.listItems]};

        case CLEAR_ITEMS: 
                    return { listItems: []};

        default: 
            return state;
    }
};

export default reducer;
