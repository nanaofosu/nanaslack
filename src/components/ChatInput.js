import { Button } from '@material-ui/core'
import firebase from 'firebase'
import React, { useState } from 'react'
import styled
 from 'styled-components'
import { db, auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


function ChatInput({channelID, channelName, viewRef}) {
    const [user] = useAuthState(auth)

    const [message, setMessage] = useState('');

    const handleClick = (e) =>{
        e.preventDefault();

        if(!channelID){
            return false;
        }
        
        db.collection('channels').doc(channelID).collection('messages').add({
            message: message, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName,
            userImage: user.photoURL,
        });

        viewRef.current.scrollIntoView({
            behavior: 'smooth'
        });

        setMessage('');
    }

    return (
        <ChatInputContainer>
           <form>
               <input value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder={`Message #${channelName}`} />
               <Button type="submit" onClick={handleClick}>Send</Button>
           </form>

        </ChatInputContainer>
    )
}

export default ChatInput

export const ChatInputContainer = styled.div`
    
    border-radius: 20px;

    form{
        position: relative;
        display: flex;
        justify-content: center;

        input{
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid #e0e0e0;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        }

        button{
            display: none;
        }
    }
`;