import React from 'react'
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

function ChatPost({image, displayName, date, message}) {
    return (
        <ChatPostContainer>
            <UserAvatar alt={displayName} src={image} />
            <PostDetails>
                <strong>{displayName}</strong> <span>{new Date(date?.toDate()).toUTCString()}</span>
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
    font-size: 13x;
    >span{
        font-size: 13px;
        color: gray;
    }
`;

export const PostMessage = styled.div`
    margin-top: 5px
`;

export const UserAvatar = styled(Avatar)`
border-radius: 5px !important;
margin-right: 10px;

`;