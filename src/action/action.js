import {
  ADD_ITEM, REMOVE_ITEM, MARK_ITEM, CLEAR_ITEMS,
} from './type';

export const addItem = (data) => (dispatch) => dispatch({
  type: ADD_ITEM,
  payload: data,
});

export const markItem = (id) => (dispatch) => {
  dispatch({
    type: MARK_ITEM,
    payload: id,
  });
};

export const removeItem = (id) => (dispatch) => dispatch({
  type: REMOVE_ITEM,
  payload: id,
});

export const clearItems = () => (dispatch) => dispatch({ type: CLEAR_ITEMS });
