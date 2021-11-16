import React, {FC} from 'react';
import {IMessage} from "../../types";
import {datePrettier} from "../../utils/datePrettier";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Message: FC<IMessage> = ({ author, imageUrl, text, time, userId }) => {
    const user = useTypedSelector(state => state.user)
    return (
        <>
            {
                !(user.id === userId)
                    ? <div className='message'>
                        {
                            (author !== 'Anonymous' && author) ? <img className='message-img' src={imageUrl ?? '/user.png' } alt={author}/>
                            : <img src='/spyware.png' className='message-img' alt='Anonymous' />
                        }

                        <div className="message-content">
                            <h3 className="message__title">{author ?? 'Anonymous'}</h3>
                            <div className="message-time">{datePrettier(time)}</div>
                            <div className="message-body">{text}</div>
                        </div>
                    </div>
                    :
                    <div className='message message_fromUser'>
                        <div className="message-content">
                            <div className="message-body">{text}</div>
                            <div className="message-time">{datePrettier(time)}</div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Message;