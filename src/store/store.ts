import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {moviesReducer} from "./moviesReducer";
import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";
import {appReducer} from "store/appReducer";


const rootReducer = combineReducers({
    app: appReducer,
    movies: moviesReducer,
    movie: movieReducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppDispatch = typeof store.dispatch
export type AppRootStateType = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
