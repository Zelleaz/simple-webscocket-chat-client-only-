import {LogIn, LogOut, UserActionTypes, UserData} from "./types";

class UserActionCreators {
    public logIn(user: UserData): LogIn {
        return {
            type: UserActionTypes.logIn,
            payload: user
        }
    }
}

export default new UserActionCreators()