import {IMessage} from "../../../types";
import {Action} from "../../store";

export interface MessageState {
    messages: IMessage[]
}

export enum MessageActionTypes {
    sendMessage = 'SEND_MESSAGE',
}

export type SendMessage = Action<MessageActionTypes.sendMessage, IMessage>

export type MessageAction =
    SendMessage
