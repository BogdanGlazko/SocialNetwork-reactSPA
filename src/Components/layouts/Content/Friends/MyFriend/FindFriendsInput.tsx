import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {TextField, useMediaQuery, useTheme} from '@mui/material';
import Button from "@mui/material/Button";
import s from "./friend.module.sass"
import {
    getInitialValueInput,
    isFollowerSelector,
    pageSizeSelector
} from "../../../../../store/REDUX-TOOLKIT/features/friends-users/friendsSelectors";
import {loading} from "../../../../../store/REDUX-TOOLKIT/features/friends-users/friendsThunks";
import {useTypeDispatch} from "../../../../../hooks/useTypeDispatch";
import useDebounce from "../../../../../hooks/useDebounce";
import {changeTermOfUserOnChange} from "../../../../../store/REDUX-TOOLKIT/features/friends-users/friendsSlice";


type FormValues = {
    searchField: string;
};


const SearchForm = () => {
    const pageSize = useSelector(pageSizeSelector)
    const isFollower = useSelector(isFollowerSelector)
    const initialValueInput = useSelector(getInitialValueInput)
    const dispatch = useTypeDispatch()
    const [searchData,setSearchData]=useState(initialValueInput)
    const debouncedValue = useDebounce<any>(searchData, 800)
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const theme = useTheme()
    const refreshSearchData=(searchData:any) => {
        dispatch(loading(1, pageSize!, searchData, isFollower!))
    }
    const onSubmit: SubmitHandler<FormValues> = refreshSearchData

    useEffect(()=>{
        dispatch(loading(1, pageSize!, searchData, isFollower!))
    },[debouncedValue])


    return (
        <form
            className={s.formSearch}
            onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputSearchWrapper}>
                <TextField
                    value={searchData}
                    label="Type to find a person"
                    variant="outlined"
                    size="small"
                    sx={{
                        height: "50px",
                        width: {
                            md:"365px",
                            sm:"100%"
                        },
                    }}
                    {...register("searchField")}
                    onChange={(e) => {
                        dispatch(changeTermOfUserOnChange(e))
                        setSearchData(e.target.value)
                    }}
                />
                <Button
                    className={s.searchButton}
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{
                        height: "40px",
                        width: "90px",
                    }}>Search</Button></div>

        </form>
    );
}

export default SearchForm;