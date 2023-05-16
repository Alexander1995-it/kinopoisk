import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../api/movies.service";

const initialState: any = null


const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const moviesReducer = moviesSlice.reducer

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (param, thunkAPI) => {
    try {
        const response = await moviesService.getMovies()
        return response.data

    } catch (e) {

    }
})