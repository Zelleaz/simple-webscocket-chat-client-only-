import {MessageAction, MessageActionTypes, MessageState} from "./types";

const initialState: MessageState = {
    messages: [],
}

export const messageReducer = (state: MessageState = initialState, action: MessageAction): MessageState => {
    switch (action.type) {
        case MessageActionTypes.sendMessage:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default: return state
    }
}