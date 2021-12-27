import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loaderReducer from './reducers/loader.reducer';
import userReducer from './reducers/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
