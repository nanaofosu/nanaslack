import { createSlice } from '@reduxjs/toolkit';




export const appSlice = createSlice({
  name: 'app',
  initialState:{
    //   lets set the initial state of the channel to null. this will later on be updated when we click on a channel
      channelID: null,
      sidebarController: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    gotoChannel: (state, action) => {
        state.channelID = action.payload.channelID;
    },
    getControlName: (state, action)=> {
        state.sidebarController = action.payload.sidebarController;
    }
  },
 
});

export const { gotoChannel } = appSlice.actions;
export const { getControlName } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.app.value)`
export const selectChannelID = (state) => state.app.channelID;
export const selectSidebarController = (state) => state.app.sidebarController;

export default appSlice.reducer;
