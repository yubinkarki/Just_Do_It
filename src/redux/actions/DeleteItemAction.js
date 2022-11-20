import {DEL_ITEM} from '../constants/Constants';

export default function DeleteItemAction(itemId) {
  return async dispatch => {
    await dispatch({type: DEL_ITEM, payload: itemId});
  };
}
