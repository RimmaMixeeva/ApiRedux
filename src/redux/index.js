import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './itemsReducer';
import { itemInfoReducer } from './itemInfoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
  itemInfo: itemInfoReducer,
  itemsInfo: itemsReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
