import {
  ADD_ITEM, REMOVE_ITEM, MARK_ITEM, CLEAR_ITEMS,
} from '../action/type';

const initialState = {
  listItems: [],
};

const getIndex = (state, payload) => state.listItems.findIndex(item => item.id === payload);

const todoReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        listItems: state.listItems.concat({
          label: payload,
          id: state.listItems.length,
          marked: false,
        }),
      };
    case MARK_ITEM:
      state.listItems[getIndex(state, payload)].marked = !state.listItems[getIndex(state, payload)].marked;
      return { listItems: [...state.listItems] };
    case REMOVE_ITEM:
      state.listItems.splice(getIndex(state, payload), 1);
      return { listItems: [...state.listItems] };
    case CLEAR_ITEMS:
      return { listItems: [] };
    default:
      return state;
  }
};

export default todoReducer;
