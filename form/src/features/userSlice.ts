import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
    value: object
}
const initialState: UserState = {
    value : {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action)=>{
            state.value = {...state.value, ...action.payload};
        },
        checkUser: () => {
        }
    }
});

export const { addUser, checkUser } = userSlice.actions

export default userSlice.reducer