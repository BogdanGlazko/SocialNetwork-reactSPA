import React from "react";
import s from "./login-logout.module.sass"
import {useForm,SubmitHandler} from "react-hook-form";
import {useSelector, useDispatch} from "react-redux";
import {Checkbox, TextField} from '@mui/material';
import Button from "@mui/material/Button";
import {loginUser} from "../../../store/REDUX-TOOLKIT/features/app/appThunk";
import Loader from "../../../AdditionalComponents/Loader";
import club from "../../../club.png";
import {AppDispatch} from "../../../store/reduxToolkit";
import {getErrorDiv, getLoading} from "../../../store/REDUX-TOOLKIT/features/app/appSelectors";
import {useNavigate} from "react-router-dom";


interface IFormValues {
    userName: string;
    userPassword: string;
}

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>();
    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        dispatch(loginUser(data))

        // navigate('/profile')
    }
    //МЫ ТУТАААААААААААААААААААААААААААААААА
    const loading = useSelector(getLoading)
    const errorDiv = useSelector(getErrorDiv)

    return (
        <div>
            {loading ?
                <div className={s.loader}><Loader/></div>:
                <>
                    <div className={s.logo}>
                        <img src={club}
                             alt="club"/>
                    </div>
                    <div className={s.loginWrapper}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={s.formWrapper}
                        >
                            <div className={s.loginHeader}>
                                <h1>Log in</h1>
                                {/*<h4> Email or Username</h4>*/}
                            </div>
                            <TextField
                                fullWidth
                                error={!!errors.userName}
                                helperText={errors?.userName ? errors.userName.message : null}
                                id="outlined-basic"
                                label="Email adress"
                                variant="outlined"
                                {...register("userName",
                                           {
                                               required: "Required field",
                                               pattern: {
                                                   value: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                   message: "Invalid email adress"
                                               }
                                           })}/>
                            <br/>
                            <TextField
                                fullWidth
                                error={!!errors.userPassword}
                                helperText={errors?.userPassword ? errors.userPassword.message : null}
                                id="outlined-basic"
                                label="Password"
                                type="password"
                                variant="outlined"
                                {...register("userPassword", {required: "Required field"})}/>
                            <br/>
                            <div className={s.checkBoxWrapper}>
                                <div>
                                    <Checkbox
                                    inputProps={{'aria-label': 'controlled'}}
                                    />
                                    <div>Remember me</div>
                                </div>
                                <div>Forgot your password?</div>
                            </div>
                            <div>
                                {errorDiv}
                            </div>
                            <br/>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                sx={{
                                        height: "60px",
                                        background: "linear-gradient(90deg, rgba(100,92,227,1) 0%, rgba(9,9,121,0.6080765069699755) 100%)"
                                    }}>Login
                            </Button>
                        </form>
                    </div>
                </>
                 }
        </div>
    );
}

export default Login;
