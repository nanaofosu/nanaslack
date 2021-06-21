import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { SearchOutlined } from '@material-ui/icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


function Header() {
    const [user] = useAuthState(auth)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchOutlined />
                <HeaderSearchBar placeholder="Search this channel"></HeaderSearchBar>
            </HeaderSearch>
            <HeaderRight>
                <HeaderAvatar className="mama"
                    onClick={()=>auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
                >
                </HeaderAvatar>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--slack-color);
    color: #fff;
`
const HeaderLeft = styled.div`
    flex: 1; 
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`
const HeaderSearch = styled.div`
    flex: 2;
    opacity: 1;
    border-radius: 5px;
    background-color: var(--slack-accent-color);
    border: 1px solid #4F4F50;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
export const HeaderAvatar = styled(Avatar)`
 cursor: pointer;
 align-self: center;
 margin: 3px 10px;

 &.MuiAvatar-root{
    height: 30px;
    width: 30px;
 }

 :hover{
     opacity: 0.8;
 }
 
`;
export const HeaderSearchBar = styled.input `
    background-color: transparent; 
    border: none;
    text-align: center;
    outline: 0;
    width: 30vw;
    color: #fff;

`;
// scr-div