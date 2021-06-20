import React from 'react';
import styled from 'styled-components';

function Chat() {
    return (
        <ChatContainer>
            <ChatHeader>
                <strong> # channelName</strong>
                <div>This is a channel description</div>
            </ChatHeader>


        </ChatContainer>
    )
}

export default Chat

export const ChatContainer = styled.div`
    padding: 20px;
`;

export const ChatHeader = styled.div`

`;