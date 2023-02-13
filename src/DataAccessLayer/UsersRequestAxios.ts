import {AxiosResponse} from "axios"
import {ResultCode} from "enum/AppEnums";
import {
    IFollowUser, IUnfollowUser,
    IUsersFromServer
} from "../@Interfaces/dataAccessLayerInterfaces/usersRequestAxiosInterfaces";
import {apiInstance} from "./apiInstance";

export const UsersRequestAxios = {

    getUsersFromServer(
        currentPage = 1,
        pageSize = 20,
        term="",
        friend:boolean
    ) {
        const params: {page:number,count:number,term:string,friend:boolean } = {
            page:currentPage,
            count:pageSize,
            term,
            friend
        }
        if(friend){
            params.friend=friend
        }
        return apiInstance.get("/users",{
            params
        })
            .then((response: AxiosResponse<IUsersFromServer>) => {
            if (response.status === ResultCode.statusCode) {
                return response.data
            }
        })
    },
    followUser(userId: number) {
        return apiInstance.post("/follow/"+userId).then((response:AxiosResponse<IFollowUser>) => {
            return response.data.resultCode === ResultCode.success ? userId : null
        })
    },
    unFollowUser(userId: number) {
        return apiInstance.delete("/follow/+"userId).then((response:AxiosResponse<IUnfollowUser>) => {
            console.log(response)
            return response.data.resultCode === ResultCode.success ? userId : null
        })
    }
}
