import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: '',
    },
    reducers: {
        
    },
})

export const {  } = userSlice.actions;

export default userSlice.reducer;