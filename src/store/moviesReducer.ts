import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesResponseType, moviesService, MovieType} from "../api/movies.service";
import {AppRootStateType} from "store/store";

const initialState: MoviesResponseType = {
    docs: [],
    limit: 30,
    page: 1,
    pages: 30,
    total: 30,
    filterMovies: 'movie',
    currentMovie: {},
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changePage(state, action) {
            state.page = action.payload
        },
        changeFilter(state, action) {
            state.filterMovies = action.payload
        },
        setInfoMovie(state, action) {
            let currentMovie = state.docs.find(movie => movie.id === action.payload)
            if (currentMovie) {
                state.currentMovie = currentMovie
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<{ docs: MovieType[], total: number, pages: number }>) => {
            state.docs = action.payload.docs
            state.total = action.payload.total
            state.pages = action.payload.pages
        })
    }
})

export const moviesReducer = moviesSlice.reducer
export const actionsMovies = moviesSlice.actions


export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (param, thunkAPI) => {
    try {
        const state = thunkAPI.getState() as AppRootStateType
        const limit = state.movies.limit
        const page = state.movies.page
        const filter = state.movies.filterMovies
        const response = await moviesService.getMovies(limit, page, filter)
        return {docs: response.data.docs, total: response.data.total, pages: response.data.pages}

    } catch (e) {
        return thunkAPI.rejectWithValue({})

    }
})

