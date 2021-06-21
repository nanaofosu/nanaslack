import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { selectChannelID} from '../features/appSlice';
import ChatPost from './ChatPost';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { Modal } from '@material-ui/core';



function Chat() {

    const channelID = useSelector(selectChannelID);  
   
    const [channelDetails] = useDocument(
        channelID && db.collection('channels').doc(channelID)
    )
    const [channelMessages, loading] = useCollection(
        channelID && db.collection('channels').doc(channelID).collection("messages").orderBy("timestamp", "asc")
    )

    // get the channel name.
    const channelName = channelDetails?.data().name;
    
    /** This is a cool trick here. I am going to use a useEffect and a reference to an empty div to scroll the 
    * the chat into view when a new post is made that goes below the input field.
     */

    //  first create a reference
     const viewRef = useRef(null)
    //  creating the useEffect to scroll into view. this will only run when the loading state changes or when the 
    // channelID changes 
    useEffect(() => {
        viewRef?.current?.scrollIntoView(
            {behavior: 'smooth'}
        )
    }, [channelID, loading])


    

    return (
        <ChatContainer>
            {channelDetails && channelID && (
                <>
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
                    date={doc.data().timestamp} 
                    message={doc.data().message}
                 />
                        
                    )
                )}
                
            {/* we will set our reference to point here. this is an empty div */}
            <ChatBottom ref={viewRef} />
            </ChatPosts>
            <ChatInput 
                viewRef={viewRef}
                channelName = {channelName}
                channelID={channelID} 
            />
                </>
            )}



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

export const ChatBottom = styled.div`
    margin: 200px;
`;

export const MyModal = styled(Modal)`

`;
