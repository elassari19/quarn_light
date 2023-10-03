import { configureStore } from "@reduxjs/toolkit";
import createAccountSlice from "./createAccountSlice";

export const store = configureStore({
  reducer: {
    root: createAccountSlice
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
