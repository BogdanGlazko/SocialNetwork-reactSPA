import {configureStore} from "@reduxjs/toolkit";
import messageInputReducer from "./REDUX-TOOLKIT/features/messages/messagesSlice"
import usersPageReducer from "./REDUX-TOOLKIT/features/friends-users/friendsSlice"
import appReducer from "./REDUX-TOOLKIT/features/app/appSlice"
import chatReducer from "./REDUX-TOOLKIT/features/chat-page/chatSlice";


export const store = configureStore({
reducer:{
    messagesPage:messageInputReducer,
    usersPage:usersPageReducer,
    appPage:appReducer,
    chatPage:chatReducer
},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


