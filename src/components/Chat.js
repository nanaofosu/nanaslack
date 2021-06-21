import { InfoOutlined, InfoRounded, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { selectChannelID } from '../features/appSlice';
import ChatPost from './ChatPost';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';



function Chat() {
    const channelID = useSelector(selectChannelID);

    const [channelDetails] = useDocument(
        channelID && db.collection('channels').doc(channelID)
    )
    const [channelMessages] = useCollection(
        channelID && db.collection('channels').doc(channelID).collection("messages").orderBy("timestamp", "asc")
    )

    // get the channel name.
    const channelName = channelDetails?.data().name
   
    console.log('channelDetails', channelDetails);
    console.log('channelMessage', channelMessages);
    

    return (
        <ChatContainer>
            <ChatHeader>
                <HeaderLeft>
                    <h4><strong> #{channelName}</strong></h4>
                    <StarBorderOutlined />
                </HeaderLeft>
                <HeaderRight>
                    <InfoOutlined />
                </HeaderRight>
            </ChatHeader>

            <ChatPosts>
                {/* here goes  the messages within a chat component*/}
                
                {channelMessages?.docs.map(
                    (doc) => (
                <ChatPost 
                    key={doc.id}
                    image = {doc.data().userImage}
                    displayName={doc.data().username} 
                    date={'6:16 AM'} 
                    message={doc.data().message}
                 />
                        
                    )
                )}
                
            </ChatPosts>
            <ChatInput 
                channelName = {channelName}
                channelID={channelID} 
            />

        </ChatContainer>
    )
}

export default Chat

export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
`;

export const ChatHeader = styled.div`
border-bottom: 1px solid #e0e0e0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;

`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const HeaderRight = styled.div`

`;

export const ChatPosts = styled.div`

`;