import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from "@material-ui/core"
import { db } from '../firebase';
import firebase from 'firebase';
function ChatInput({channelName,channelId, chatRef}) {
    const [input,setInput] = useState("")

    const sendMessage = (e) =>{
        
        e.preventDefault();
        if(!channelId)
        {
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Navnit Anand",
            userImage: "https://media-exp1.licdn.com/dms/image/C4E03AQH_7tfgRJVIGw/profile-displayphoto-shrink_400_400/0/1621256729104?e=1628726400&v=beta&t=BvSvqyqavOqbAhpaxxs3VeWgRHDrOyLW7QvF-V11yfQ",
        });
        chatRef.current.scrollIntoView({
            behaviour:"smooth",
        });

        setInput("");
    }

    return <ChatInputContainer>
        <form >
            <input 
                value={input} 
                onChange={ (e) =>setInput(e.target.value)} 
                placeholder={`Mesaage #${channelName}`}/>
            <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
        </form>

    </ChatInputContainer>
}

export default ChatInput
const ChatInputContainer=styled.div`
    border-radius: 20px;
>form {
    position: relative;
    display: flex;
    justify-content: center;
    }
    >form >input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }
    >form >button {
        display: none !important;
    }

`
