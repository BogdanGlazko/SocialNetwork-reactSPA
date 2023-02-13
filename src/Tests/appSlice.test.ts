import AppSlice, {changeIsLoginUser, errorFromServer, loading} from "../store/REDUX-TOOLKIT/features/app/appSlice";
import {IAppInitialState} from "../@Interfaces/appInterfaces/appInterfaces";

test( "appSliceTest" , ()=>{
const state:IAppInitialState = {
    isLogginedUser: false,
    loading: false,
    errorDiv: null,
    userData:null,
}
    //action
    const loadingData =  AppSlice(state,loading(true))
    const chngIsLoginUserData = AppSlice(state, changeIsLoginUser(true))
    const errorFromServerData = AppSlice(state, errorFromServer("Incorrect Email or Password"))
    console.log(errorFromServerData)
    expect(loadingData.loading).toBeTruthy()
    expect(chngIsLoginUserData.isLogginedUser).toBeTruthy()
    expect(errorFromServerData.errorDiv).toBe("Incorrect Email or Password")
})