import {Action} from "../../store";

export interface UserData {
    name: string
    id: string
    imageUrl: string
}

export interface UserState extends UserData {
    isAuth: boolean
}

export enum UserActionTypes {
    logIn = 'LOG_IN',
    logOut = 'LOG_OUT',
}

export type LogIn = Action<UserActionTypes.logIn, UserData>
export type LogOut = Action<UserActionTypes.logOut, null>

export type UserAction =
    LogIn |
    LogOut