import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelID: null,
        openCreateChannelModal: false
    },
    reducers: {
        gotoChannel: (state, action) => {
            state.channelID = action.payload.channelID;
        },
        createChannel: (state, action) => {
            state.openCreateChannelModal = action.payload.openCreateChannelModal;
        }
    },
});

export const {gotoChannel} = appSlice.actions;
export const {createChannel} = appSlice.actions;

export const selectChannelID =  state => state.app.channelID;
export const selectOpenCreateChannelModal =  state => state.app.openCreateChannelModal;


export default appSlice.reducer;