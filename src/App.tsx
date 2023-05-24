import React, {useEffect} from 'react';
import style from 'App.module.scss';
import {fetchMovies} from "store/moviesReducer";
import {useAppDispatch} from "store/store";
import Main from "./components/Main/Main";
import Header from "components/Header/Header";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <div className={style.appBlock}>
            {/*<Header/>*/}
            <Main/>
        </div>
    );
}

export default App;
