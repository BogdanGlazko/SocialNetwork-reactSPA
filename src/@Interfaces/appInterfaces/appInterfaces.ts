export interface IAppInitialState {
    isLogginedUser: boolean
    loading: boolean
    errorDiv: string | null
    userData:null|{id: number, login: string, email:string}
}
