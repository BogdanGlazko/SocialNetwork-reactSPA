import React from "react";
import s from "./friend.module.sass"
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {AppDispatch} from "../../../../../store/reduxToolkit";
import {checkBoxSelector} from "../../../../../store/REDUX-TOOLKIT/features/friends-users/friendsSelectors";
import {followUser, unFollowUser} from "../../../../../store/REDUX-TOOLKIT/features/friends-users/friendsThunks";
import {getDefaultAvatar} from "../../../../../util/stringAvatar";
import {IUserModel} from "../../../../../@Interfaces/friendsInterfaces/friendsInterfaces";


const MyFriend = (props:IUserModel) => {
const dispatch=useDispatch<AppDispatch>()
const isCheckBoxActive=useSelector(checkBoxSelector)

    return (
            <div className={s.friendWrapper}>
                <br/>
                <div className={s.friend}>
                    <div className={s.leftSticky}>
                        {!props.photos.small ?
                        <Avatar  {...getDefaultAvatar(props.name,65,65,2.5)} /> :
                        <img src={props.photos.small} alt="avatar"/>}
                        <div className={s.nameStatusWrapper}>
                            <div className={s.name}>{props.name}</div>
                            <div className={s.status}>{props.status}</div>
                            <div>Send Meassage</div>
                        </div>
                    </div>
                    <div className={s.buttonWrapper}>
                        {props.followed ?
                            <Button
                                className={s.button}
                                onClick={()=>dispatch(unFollowUser(props.id))}> Unfollow </Button>
                            : <Button
                                className={s.button}
                                variant="contained"
                                onClick={()=>dispatch(followUser(props.id))}>Follow</Button> }
                    </div>
                </div>
                <br/>
            </div>
    )
}

export default MyFriend;