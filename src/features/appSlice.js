import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelID: null
    },
    reducers: {
        gotoChannel: (state, action) => {
            state.channelID = action.payload.channelID;
        },
    },
});

export const {gotoChannel} = appSlice.actions;

export const selectChannelID =  state => state.app.channelID;

export default appSlice.reducer;