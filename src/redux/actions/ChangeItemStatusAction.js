import {CHANGE_ITEM_STATUS} from '../constants/Constants';

export default function ChangeItemStatusAction(item) {
  return dispatch => {
    const statusChanged = {
      id: item.id,
      status: !item.status,
      title: item.title,
    };

    setTimeout(() => {
      dispatch({type: CHANGE_ITEM_STATUS, payload: statusChanged});
    }, 300);
  };
}
