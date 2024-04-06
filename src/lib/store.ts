import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './CounterSlice/counter'
import { signUpUserSlice } from './UserSlice/userSignUp'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter : counterSlice.reducer ,
        signUpUser : signUpUserSlice.reducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']