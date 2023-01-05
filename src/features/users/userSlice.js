import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'Ahsan Saleem'},
    {id: '2', name: 'Abdullah Shafiq'},
    {id: '3', name: 'Dawood Umar'}
]

const userSlice = createSlice(
    {
        name: 'users',
    initialState,
        reducers:{

        }

    }
)


export  const selectAllUsers = (state)=>state.users;
export default userSlice.reducer
