import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesResponseType, moviesService, MovieType} from "../api/movies.service";
import {AppRootStateType} from "store/store";

const initialState: MoviesResponseType = {
    docs: [],
    limit: 30,
    page: 1,
    pages: 30,
    total: 30,
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<{ docs: MovieType[], total: number, pages: number }>) => {
            state.docs = action.payload.docs
            state.total = action.payload.total
            state.pages = action.payload.pages
        })
    }
})

export const moviesReducer = moviesSlice.reducer

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (param, thunkAPI) => {
    try {
        const state = thunkAPI.getState() as AppRootStateType
        const limit = state.movies.limit
        const response = await moviesService.getMovies(limit)
        return {docs: response.data.docs, total: response.data.total, pages: response.data.pages}

    } catch (e) {
        return thunkAPI.rejectWithValue({})

    }
})

