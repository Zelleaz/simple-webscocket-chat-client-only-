import {IMessage} from "../../../types";
import {MessageActionTypes, SendMessage} from "./types";

class MessageActionCreators {
    sendMessage(message: IMessage): SendMessage {
        return {
            type: MessageActionTypes.sendMessage,
            payload: message
        }
    }
}

export default new MessageActionCreators()