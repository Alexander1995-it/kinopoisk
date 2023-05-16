import React, {useEffect} from 'react';
import './App.css';
import {fetchMovies} from "./store/moviesReducer";
import {useAppDispatch, useAppSelector} from "./store/store";
import Main from "./components/Main/Main";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(fetchMovies())
    }, [])
    return (
        <div className="App">
            <Main/>
        < /div>
    );
}

export default App;
