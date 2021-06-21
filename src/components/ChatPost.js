import React from 'react'
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import { db } from '../firebase';

function ChatPost({image, displayName, date, message}) {
    return (
        <ChatPostContainer>
            <Avatar />
            <PostDetails>
                <strong>{displayName}</strong> {date}
                <PostMessage>
                    {message}
                </PostMessage>
            </PostDetails>
        </ChatPostContainer>
    )
}

export default ChatPost;

export const ChatPostContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;

export const PostDetails = styled.div`

`;

export const PostMessage = styled.div`

`;