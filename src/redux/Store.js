import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import TodoDataReducer from './reducers/TodoDataReducer';

const rootReducer = combineReducers({
  todoReducer: TodoDataReducer,
});

export default store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
