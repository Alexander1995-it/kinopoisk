import React, {useEffect} from 'react';
import style from 'App.module.scss';
import {fetchMovies} from "store/moviesReducer";
import {useAppDispatch} from "store/store";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Movies from "components/Movies/Movies";
import InfoMovie from "components/InfoMovie/InfoMovie";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <div className={style.appBlock}>
            <Routes>
                <Route element={<Main/>}>
                    <Route path='/' element={<Movies/>}/>
                    <Route path='/infoMovie' element={<InfoMovie/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
