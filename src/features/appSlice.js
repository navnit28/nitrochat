import { createSlice } from '@reduxjs/toolkit';

export const appSlice =createSlice(
  {
    name: 'app',
    initialState:{
      roomId: null,
    },
    reducers:{
      enterRoom : (state,action) =>{
        state.roomId=action.payload.roomId;
      },
    },
  });

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const {enterRoom}=appSlice.actions;

export const selectRoomId= state => state.app.roomId;

export default appSlice.reducer;
