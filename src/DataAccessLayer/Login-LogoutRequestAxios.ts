import axios, {AxiosResponse} from "axios"
import {ResultCode} from "enum/AppEnums";
import {apiInstance} from "./apiInstance";
import {ILogin} from "../@Interfaces/dataAccessLayerInterfaces/loginLogoutInterfaces";

export const LoginRequestAxios = {
    loginUserFromServer(email: string, password: string) {
        return apiInstance.post(`/auth/login`, {email, password}).then((response: AxiosResponse<ILogin>) => {
            if (response.status === ResultCode.statusCode) {
                return response.data
            }
        })
    },

    logout() {
        return apiInstance.delete(`/auth/login`)
    },

    ifUserLoggined() {
        return apiInstance.get(`/auth/me`).then((response: AxiosResponse<ILogin>) => {
            return response
        })
    }
}