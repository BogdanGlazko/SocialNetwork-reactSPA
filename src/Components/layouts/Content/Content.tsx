import React from "react";
import s from "./content.module.sass"
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";
import Feed from "./Feed/Feed";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import MyProfile from "./My Profile/MyProfile";
import {useSelector} from "react-redux";
import Loader from "../../../AdditionalComponents/Loader";
import Chat from "./Chat/Chat";
import {IAppInitialState} from "../../../@Interfaces/appInterfaces/appInterfaces";
import Footer from "../Footer/Footer";


function Content() {
    const isLoading = useSelector((state:IAppInitialState) => state.loading)
    const location = useLocation();
    return (
        isLoading ?
            <div className={s.loader}><Loader/></div> :
                <div className={s.contentWrapper}>
                    <div className={s.content}>
                        <Routes location={location} >
                            <Route path="profile" element={<MyProfile/>}/>
                            <Route path="*" element={<Navigate to="/profile"/>} />
                            <Route path="messages" element={<Messages/>}/>
                            <Route path="feed" element={<Feed/>}/>
                            <Route path="friends" element={<Friends/>}/>
                            <Route path="chat" element={<Chat/>}/>
                        </Routes>
                    </div>
                </div>
    );
}

export default Content;
