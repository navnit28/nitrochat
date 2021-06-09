import React from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
function Chat() {
    const roomId=useSelector(selectRoomId)
    const [roomDetails]= useDocument(
    roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages]=useCollection(
        roomId && 
        db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp","asc")
    )
    return (
        <ChatContainer>
            <h1>i am the chat screen </h1>
            <>
        <Header>
            <HeaderLeft>
                <h4><strong>#room-name</strong></h4>
                <StarBorderOutlinedIcon/>
            </HeaderLeft>
            <HeaderRight>
                <p>
                    <InfoOutlinedIcon/> Details
                </p>
            </HeaderRight>
        </Header>
        <ChatMessages>

        </ChatMessages>
        <ChatInput
            channelName={roomDetails?.data().name}
            channelId={roomId}
        />
        </>

        </ChatContainer>
    )
}

export default Chat

const Header =styled.div`
display:flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`
const ChatMessages=styled.div`

`
const HeaderLeft=styled.div`
display: flex;
align-items: center;

>h4 {
    display :flex;
    text-transform: lowercase;
}
> h4 >.MuiSvgIcon-root{
    margin-left: 10px;
    font-size: 18px;
    margin-right: 10px;
}
`
const HeaderRight=styled.div`
>p{
    display: flex;
    align-items: center;
    font-size: 14px;
}
> p >.MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
}
`
const ChatContainer=styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;

`
