import { ADD_ITEM, REMOVE_ITEM } from './type';

export const addItem = (data) => dispatch =>  dispatch({
                                    type: ADD_ITEM,
                                    payload: data
                                });
