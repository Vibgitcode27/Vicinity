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

export interface UserPostState {
  Picture : string ,
  Description : string ,
  Duration : string ,
  RequiermentsAndRestriction : string ,
  Location : string ,
  Cost : string ,
  Username : string ,
}

const initialUserPostState: UserPostState = {
  Picture : "",
  Description : "",
  Duration : "",
  RequiermentsAndRestriction : "",
  Location : "",
  Cost : "",
  Username : "",
}

export const postUserSlice = createSlice({
  name: 'postUserSlice',
  initialState : initialUserPostState,
  reducers: {
    postUser: (state , action) => {
        state.Picture += action.payload.Picture,
        state.Description += action.payload.Description,
        state.Duration += action.payload.Duration,
        state.RequiermentsAndRestriction += action.payload.RequiermentsAndRestriction,
        state.Location += action.payload.Location,
        state.Cost += action.payload.Cost,
        state.Username += action.payload.Username
      },
  },
})

export interface UserGetPostState {
  Picture : string ,
  Description : string ,
  Duration : string ,
  RequiermentsAndRestriction : string ,
  Location : string ,
  Cost : string ,
}

const initialUserGetPostState : UserGetPostState = {
  Picture : "",
  Description : "",
  Duration : "",
  RequiermentsAndRestriction : "",
  Location : "",
  Cost : "",
}

export const getPostUserSlice = createSlice({
  name: 'getPostUserSlice',
  initialState : initialUserGetPostState,
  reducers: {
    getPostUser: (state , action) => {
        state.Picture += action.payload.Picture,
        state.Description += action.payload.Description,
        state.Duration += action.payload.Duration,
        state.RequiermentsAndRestriction += action.payload.RequiermentsAndRestriction,
        state.Location += action.payload.Location,
        state.Cost += action.payload.Cost
      },
  },
})


export const { signUpUser } = signUpUserSlice.actions
export const { postUser } = postUserSlice.actions
export const { getPostUser } = getPostUserSlice.actions

export default signUpUserSlice.reducer;