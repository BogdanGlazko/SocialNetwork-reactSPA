import s from './App.module.sass';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Content from "./Components/layouts/Content/Content";
import Sidebar from "./Components/layouts/Sidebar/Sidebar";
import Login from "./Components/layouts/Login-Logout/Login";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "./store/REDUX-TOOLKIT/features/app/appSlice.ts";
import Loader from "./AdditionalComponents/Loader";
import Header from "./Components/layouts/Header/Header";
import 'antd/dist/antd.css';
import {isLoggedUser} from "./store/REDUX-TOOLKIT/features/app/appThunk";
import Footer from "./Components/layouts/Footer/Footer";

const App = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateApp = useSelector((state) => state.appPage)

    useEffect(() => {
        // renavigate to page where user has been before
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
        }
        dispatch(loading(true))
        dispatch(isLoggedUser())
    }, [])

    return (
        stateApp.loading ? <div className={s.loader}><Loader/></div> :
            <>
                {stateApp.isLogginedUser === false ?
                    <div className={s.appWrapper}>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="*" element={<Navigate to="/login"/>}/>
                        </Routes>
                    </div>
                    : <div className={s.app}>
                        <Header/>
                        <Sidebar/>
                        <Content/>
                    </div>
                }
            </>
    );
}
export default App;
