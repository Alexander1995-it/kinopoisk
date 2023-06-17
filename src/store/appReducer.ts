import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher((action) => {
                    return action.type.endsWith('/pending')
                },
                (state, action) => {
                    state.isLoading = true
                }
            )
            .addMatcher((action) => {
                    return action.type.endsWith('/fulfilled')
                },
                (state, action) => {
                    state.isLoading = false
                }
            )
            .addMatcher((action) => {
                    return action.type.endsWith('/rejected')
                },
                (state, action) => {
                    state.isLoading = false
                }
            )


    }
})


export const appReducer = appSlice.reducer
export const actionMovie = appSlice.actions



