import {ADD_ITEM, DEL_ITEM, CHANGE_ITEM_STATUS} from '../constants/Constants';

const initState = {
  todoData: [
    {
      id: 1,
      title: 'This is todo 1',
      status: false,
    },
    {
      id: 2,
      title: 'This is todo 2',
      status: false,
    },
    {
      id: 3,
      title: 'This is todo 3',
      status: false,
    },
    {
      id: 4,
      title: 'This is todo 4',
      status: false,
    },
    {
      id: 5,
      title: 'This is todo 5',
      status: false,
    },
    {
      id: 6,
      title: 'This is todo 6',
      status: true,
    },
    {
      id: 7,
      title: 'This is todo 7',
      status: true,
    },
    {
      id: 8,
      title: 'This is todo 8',
      status: true,
    },
    {
      id: 9,
      title: 'This is todo 9',
      status: true,
    },
    {
      id: 10,
      title: 'This is todo 10',
      status: true,
    },
  ],
};

export default function TodoDataReducer(state = initState.todoData, action) {
  let {type, payload} = action;

  switch (type) {
    case ADD_ITEM:
      return [...state, payload];

    case DEL_ITEM:
      return [...state.filter(element => element.id !== payload)];

    case CHANGE_ITEM_STATUS:
      return [...state.filter(element => element.id !== payload.id), payload];

    default:
      return state;
  }
}
