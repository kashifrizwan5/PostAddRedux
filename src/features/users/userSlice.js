import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: '0', name: 'kashif Shaikh' },
	{ id: '1', name: 'Gopal Kumar' },
	{ id: '2', name: 'Rushi Survase' },
]

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducer: {}
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer;