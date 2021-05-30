import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const counterSlice =createSlice(
  {
    name: 'counter',
    initialState:{
      value: 0,
    },
    reducers:{
      increment : state =>{
        state.value+=1;
      },
      decrement: state =>{
        state.value-=1;
      },
      incrementByAmount: (state,action)=>{
        state.value+=action.payload;
      },
    },
  }
);

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export default counterSlice.reducer;
