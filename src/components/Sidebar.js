import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import styled from 'styled-components';
import SidebarOptions from './SidebarOptions';
import SubjectIcon from '@material-ui/icons/Subject';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {db} from '../firebase'
import {useCollection} from "react-firebase-hooks/firestore"

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("channels"))

    

    
    return (
       <SidebarContainer>
           <SidebarHeader>
               <SidebarInfo>
                <h2>
                    Nana's Slack Clone
                </h2>
                <h3>
                {/* <EditOutlinedIcon /> */}
                <FiberManualRecordSharpIcon />
                    Nana Ofosu
                </h3>
               </SidebarInfo>
               <EditOutlinedIcon />
           </SidebarHeader>
           <SidebarOptions Icon={SubjectIcon} title="All unreads" />
           <SidebarOptions Icon={ChatBubbleOutlineOutlinedIcon} title="All DMs" />
           <SidebarOptions Icon={FileCopyOutlinedIcon} title="Drafts" />
           <SidebarOptions Icon={AlternateEmailOutlinedIcon} title='Mentions & reactions' />
           <SidebarOptions Icon={BookmarkBorderOutlinedIcon} title="Saved items" />
           <SidebarOptions Icon={MoreVertOutlinedIcon} title="More" />
           <SidebarOptions Icon={ArrowDropDownIcon} title="Channels" openable controls='channels' ></SidebarOptions>
           {channels?.docs.map(
               (doc) => (
                <SidebarOptions 
                key={doc.id}
                id = {doc.id}
                title={doc.data().name}
                addORhash = {'#'}
                 />
               )
           )}
           <SidebarOptions addORhash="+" title="Add channels" addOption room="channels" />
           <SidebarOptions Icon={ArrowDropDownIcon} title="Direct Messages" />
           <SidebarOptions addORhash="+" title="Add teammates" addOption room="channels" />
           <SidebarOptions Icon={ArrowDropDownIcon} title="Apps" openable/>
           <SidebarOptions title="All unreads" />

           
       </SidebarContainer>
    )
}

export default Sidebar

export const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: #fff;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 300px;

`;

export const SidebarHeader = styled.div`
    display: flex;
    border: 1px solid #49274b;
    padding: 13px;
    justify-content: space-between;

    >.MuiSvgIcon-root{
        padding: 8px;
        background-color: #fff;
        border-radius: 50%;
        color: var(--slack-color);
    }

`;

export const SidebarInfo = styled.div`
    flex: 1; 
    >h2{
        font-size: 15px;
        margin-bottom: 5px;
    }
    >h3{
        display: flex;
        font-size: 13px;
        align-items: center;
        
        .MuiSvgIcon-root{
            font-size: 14px;
            margin-right: 3px;
        }
    }

`;