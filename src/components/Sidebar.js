import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from './SidebarOption';
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import AddIcon from "@material-ui/icons/Add"
import { db } from '../firebase';
import {useCollection} from "react-firebase-hooks/firestore";
function Sidebar() {
    const [channels,loading,error]=useCollection(db.collection("rooms"));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Welcome </h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        NAVNIT ANAND
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="FileBrowser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption  title="Add Channel"/>
            {channels?.docs.map(doc=>(
                <SidebarOption 
                key={doc.id} 
                id={doc.id}
                title={doc.data().name}
                />
            ))
            }
        </SidebarContainer>
    )
}

export default Sidebar
const SidebarContainer=styled.div`
    color: white;
    background-color: var(--nitrochat-color);
    flex: 0.3;
    border-top: 1px solid #49274b ;
    max-width: 260px;
    margin-top: 60px;
`
const SidebarHeader=styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`
const SidebarInfo=styled.div`
    flex: 1;
    > h2{
        font-size: 15px;
        font-weight:900;
        margin-bottom:5px;
    }
    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    >h3> .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color:green;
    }
`