import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages-reducer';
import postReducer from './post-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

const store = configureStore({
  reducer: {
    postsPage: postReducer,
    messagesPage: messagesReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
  }
});

export default store;
