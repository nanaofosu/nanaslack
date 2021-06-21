import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import GoogleIcon from '@material-ui/icons/Google';


function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg' />
                <h1>Sign in to your workspace</h1>
                <Button onClick={signIn}>
                   <GoogleAlteredIcon/>
                    Sign in with Google</Button>
            </LoginInnerContainer>
            
        </LoginContainer>
    )
}

export default Login

export const LoginContainer = styled.div`
/* background-color: bisque; */
width: 100vw;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;

`;

export const LoginInnerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
background-color: white;
width: 500px;
height: 500px;
box-shadow: 0px 1px 3px #e0e0e0, 0px 1px 3px #e0e0e0;
    img{
        width: 200px;
    }
    h1{
        margin-top: 20px;
    }
    Button{
        color: white;
        background-color: var(--slack-color);
        margin-top: 20px;
        :hover{
            background-color: var(--slack-accent-color);
        }

    }
`;

export const GoogleAlteredIcon = styled(GoogleIcon)`
    margin-right: 10px;
`;