import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAppInitialState} from "../../../../@Interfaces/appInterfaces/appInterfaces";


const initialState: IAppInitialState = {
    isLogginedUser: false,
    loading: false,
    errorDiv: null,
    userData:null
}

export const appSlice = createSlice({
    name: "appReducer",
    initialState,
    reducers: {
        changeIsLoginUser: (state: IAppInitialState, action: PayloadAction<boolean>): void => {
            state.isLogginedUser = action.payload;
        },
        loading: (state, action: PayloadAction<boolean>): void => {
            state.loading = action.payload;
        },
        errorFromServer: (state, action): void => {
            state.errorDiv = action.payload.messages[0]
        },
        setUserData:(state,action):void=>{
            state.userData=action.payload
        }
    }
});


export const {changeIsLoginUser, loading, errorFromServer,setUserData} = appSlice.actions;
export default appSlice.reducer;
