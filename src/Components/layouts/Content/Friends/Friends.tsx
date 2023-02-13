import React, {useEffect} from "react";
import MyFriend from "./MyFriend/MyFriend";
import {useSelector} from "react-redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import Loader from "../../../../AdditionalComponents/Loader";
import Pagination from '@mui/material/Pagination';
import s from "./MyFriend/friend.module.sass"
import {
    checkBoxSelector,
    currentPageSelector,
    filterSelector,
    getInitialValueInput,
    isFollowerSelector,
    isLoadedSelector,
    isLoadedUsersOnChangePageSelector,
    pageSizeSelector,
    totalCountSelector,
    usersSelector
} from "../../../../store/REDUX-TOOLKIT/features/friends-users/friendsSelectors";
import SearchForm from "./MyFriend/FindFriendsInput";
import {Checkbox} from "@mui/material";
import {followersCheckbox, loading} from "../../../../store/REDUX-TOOLKIT/features/friends-users/friendsThunks";
import {getUsersForChatPage} from "store/REDUX-TOOLKIT/features/chat-page/chatThunks";
import {useTypeDispatch} from "../../../../hooks/useTypeDispatch";


const Friends = () => {
    const dispatch =useTypeDispatch()
    const location = useLocation()
    const term = useSelector(getInitialValueInput)
    const currentPage = useSelector(currentPageSelector)
    const pageSize = useSelector(pageSizeSelector)
    const totalCount = useSelector(totalCountSelector)
    const isLoaded = useSelector(isLoadedSelector)
    const isLoadedUsersOnChangePage = useSelector(isLoadedUsersOnChangePageSelector)
    const users = useSelector(usersSelector)
    const isCheckBoxActive = useSelector(checkBoxSelector)
    const isFollower = useSelector(isFollowerSelector)
    const filter = useSelector(filterSelector)
    const navigate: any = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        navigate("/friends", {
            page: `${currentPage}`,
            count: `${pageSize}`,
            term: `${term}`,
            friend: `${isFollower}`,
        })
    }, [term, currentPage, pageSize])

    useEffect(() => {
        const friendValue = isFollower
        setSearchParams({
            page: `${currentPage}`,
            count: `${pageSize}`,
            term: `${term}`,
            friend: `${isFollower}`,
        })
    }, [term, currentPage, pageSize, isFollower]);

    useEffect(() => {
        dispatch(getUsersForChatPage({currentPage, pageSize, term, isFollower}))
    }, [])

//pagination
    const pageCount = Math.ceil(totalCount! / pageSize!)

    return (
        isLoaded ? <div className={s.loader}><Loader/></div> :
            <div>
                <h2>Friends</h2>
                <div className={s.mainWrapper}>
                    <Pagination
                        page={currentPage!}
                        className={s.paginator}
                        count={pageCount}
                        color="primary"
                        onChange={(e: React.ChangeEvent<unknown>, value: number) =>
                            dispatch(loading(value, pageSize!, term, isFollower!))}
                    />
                    <div className={s.checkboxWrapper}>
                        <div>
                            <span>Only followed friends</span>
                            <span>
                                <Checkbox
                                    checked={isCheckBoxActive}
                                    onChange={(e) => {
                                        dispatch(followersCheckbox(e.target.checked, 1, pageSize!, term, isFollower!))
                                    }}/>
                            </span>
                        </div>
                    </div>
                    <SearchForm/>
                    {isLoadedUsersOnChangePage ? <Loader/> :
                        users!.map(e =>
                            <div
                                className={s.friendsWrapperBorder}
                                key={Math.ceil(e.id)}
                            >
                                <MyFriend
                                    name={e.name}
                                    status={e.status}
                                    photos={e.photos}
                                    followed={e.followed}
                                    id={e.id}
                                />
                            </div>
                        )}</div>
            </div>
    );
}

export default Friends;