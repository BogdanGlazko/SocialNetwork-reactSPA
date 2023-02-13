import {RootState} from "../../../reduxToolkit";
import {Root} from "react-dom/client";
import {currentUserType} from "./messagesSlice";

export const currentUser = (state:RootState) => state.messagesPage.currentUser
export const messagesPage = (state:RootState)=>state.messagesPage.messagesPageUser100
export const currentMessage=(state:RootState)=> state.messagesPage.currentMessage
export const messageTextArea =(state:RootState)=> state.messagesPage.messageTextarea
