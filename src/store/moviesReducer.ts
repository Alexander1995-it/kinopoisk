import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    FilterMoviesType,
    MoviesResponseType,
    moviesService,
    MovieType,
    querySearchMoviesType
} from "common/api/movies.service";
import {AppRootStateType} from "store/store";
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";

const initialState: MoviesResponseType = {
    docs: [],
    limit: 30,
    pages: 30,
    currentPage: null,
    total: 0,
    type: 'movie',
    searchName: ''
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changePage(state, action) {
            state.currentPage = action.payload === null ? 1 : +action.payload
        },
        changeFilter(state, action) {
            state.type = action.payload === null ? state.type : action.payload
        },
        changeSearchName(state, action) {
            state.searchName = action.payload === null ? '' : action.payload
        },
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

export const fetchMovies = createAppAsyncThunk<MoviesResponseType, querySearchMoviesType>('movies/fetchMovies', async (param, thunkAPI) => {
    try {
        const state = thunkAPI.getState() as AppRootStateType
        const params = {
            limit: state.movies.limit,
            page: param.page ? param.page : state.movies.currentPage,
            type: param.type ? param.type : state.movies.type,
            poster: '!null' as const,
            name: '!null' as const,
            ...param
        }
        const response = await moviesService.getMovies(params)
        return response.data

    } catch (e) {
        return thunkAPI.rejectWithValue(null)

    }
})


