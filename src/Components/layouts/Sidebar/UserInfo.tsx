import React, {useState} from "react";
import s from "./sidebar.module.sass"
import {useSelector} from "react-redux";
import {getUserData} from "../../../store/REDUX-TOOLKIT/features/app/appSelectors";

const UserInfo = () => {

    const userData = useSelector(getUserData)
   if(!userData){
       return null
   }
    return (
        <>
            <div className={s.photoWrapper}>
                <img
                    src="https://sun9-86.userapi.com/impf/c847217/v847217422/4504b/ZWZ7rnD-yOI.jpg?size=720x960&quality=96&sign=ad4016def31c338c3e4e30c9c8254e7a&type=album"
                    alt="ava"/>
            </div>
            <div className={s.name}>{userData.login}</div>
            <br/>
            <div className={s.infoAboutFollowers}>
                <div>Posts <br/> <span>21</span></div>
                <div>Following <br/> <span>50</span></div>
                <div>Followers <br/> <span>60</span></div>
            </div>
        </>
    );
}
export default UserInfo;
