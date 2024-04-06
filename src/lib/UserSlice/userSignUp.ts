import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserSignUpState {
    Fname : string ,
    Lname : string ,
    Location : string ,
    Bio : string ,
    Email : string ,
    Username : string ,
    ProfilePic : string ,
}

const initialSignUpState: UserSignUpState = {
    Fname : "",
    Lname : "",
    Location : "",
    Bio : "",
    Email : "",
    Username : "",
    ProfilePic : "",
}

// export const fetchUserData = createAsyncThunk("fetchUserData", async () => {
//     let result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     result = await result.json()
//     return result;
//   })

export const signUpUserSlice = createSlice({
  name: 'signUpUserSlice',
  initialState : initialSignUpState,
  reducers: {
    signUpUser: (state , action) => {
        state.Lname += action.payload.Lname,
        state.Fname += action.payload.Fname,
        state.Location += action.payload.Location,
        state.Bio += action.payload.Bio,
        state.Email += action.payload.Email,
        state.Username += action.payload.Username,
        state.ProfilePic += action.payload.ProfilePic
      },
  },
})

export const { signUpUser } = signUpUserSlice.actions

export default signUpUserSlice.reducer;