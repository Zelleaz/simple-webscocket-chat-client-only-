import {UserAction, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
    name: '',
    id: '',
    imageUrl: '',
    isAuth: false
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.logIn:
            return {
                ...action.payload,
                isAuth: true
            }
        default: return state
    }
}