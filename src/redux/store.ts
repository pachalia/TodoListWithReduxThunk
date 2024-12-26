import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { reducer } from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
