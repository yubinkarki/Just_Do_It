import {ADD_ITEM} from '../constants/Constants';
import Toast from 'react-native-toast-message';

export default function AddItemAction(
  itemName,
  setIsNameEmpty,
  clearInputText,
) {
  return async dispatch => {
    const randomIntFromInterval = (min, max) => {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const rndInt = randomIntFromInterval(1, 10000);

    if (!itemName || !itemName.trim()) {
      setIsNameEmpty(true);
    } else {
      let newItem = {
        id: rndInt,
        title: itemName.trim(),
        status: false,
      };

      await dispatch({type: ADD_ITEM, payload: newItem});

      clearInputText();

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Added new todo',
        visibilityTime: 3000,
      });
    }
  };
}
