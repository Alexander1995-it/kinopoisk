import {InfoMovieType, moviesService} from "common/api/movies.service";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        infoMovie: null as null | InfoMovieType
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.fulfilled, (state, action: PayloadAction<any>) => {
            state.infoMovie = action.payload
        })
    }
})


export const movieReducer = movieSlice.reducer
export const actionMovie = movieSlice.actions


export const fetchMovie = createAppAsyncThunk<InfoMovieType, number>('movie/fetchMovie', async (id, thunkAPI) => {
    try {
        const response = await moviesService.getMovieById(id)
        return response.data

    } catch (e) {
        return thunkAPI.rejectWithValue(null)

    }
})

