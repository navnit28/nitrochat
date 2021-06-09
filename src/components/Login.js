import React from 'react'
import styled from 'styled-components'
import {Button} from "@material-ui/core"
import { auth,provider } from "../firebase";
function Login() {
    const signIn =e =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
        alert(error.message))
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                 <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="" />
                <h1>Welcome to nitrochat</h1>
                <p>
                    nitrochat.com  
                </p>
                <Button type="submit" onClick={signIn}>
                    Sign in with google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer=styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    place-items: center;
    display: grid;
`
const LoginInnerContainer=styled.div`
padding:100px;
background-color: white;
border-radius: 10px;
text-align: center;
>img{
    height: 100px;
    object-fit: contain;
    margin-bottom: 40px;

}
>button{
    margin-top: 50px;
    color: white;
    background-color: skyblue !important;
    text-transform: inherit !important;
}

`