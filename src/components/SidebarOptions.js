import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {db} from '../firebase'
import { gotoChannel, selectChannelID } from '../features/appSlice';

function SidebarOptions({Icon, title, addOption, id, addORhash, room}) {
    const dispatch = useDispatch();

    // const [open, setOpen] = useState(false);
    // const handleIconClick = () =>{
    //     if(openable){
    //         setOpen(!Boolean(open))
    //     }
    //     if(controls){
    //         dispatch(getControlName(
    //             {sidebarController: 'controls'}
    //         ))
    //     }
    // }

    const selectChannel = () =>{
        // only channels will have IDs
        if(id){
            dispatch(
                gotoChannel(
                    {
                        channelID: id
                    }
                )
            )
        }
    }

    const createAChannel = () => {
        const channelName = prompt("Create a channel"); 
            if(channelName){
                db.collection(room).add({
                    name: channelName
                })
            }
    }

    const handleClick = ()=>{
        if(addOption){
            createAChannel()
        }
        else{
            selectChannel()
        }
    }

    return (
        <SidebarOptionsContainer
           onClick={handleClick}
        >
            { Icon && <Icon fontSize="small" style={{padding: 10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
               <SidebarOptionChannel>
                   <span>{addORhash}</span>{title}
               </SidebarOptionChannel>
            )}

        </SidebarOptionsContainer>
    )
}

export default SidebarOptions

export const SidebarOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    
    h3{
        font-weight: 500;
        span{
            padding: 15px;
        }
    }
    :hover{
        background-color: var(--slack-accent-color);
    }
`;

export const SidebarOptionChannel = styled.h3`
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    padding: 5px 20px;
`;