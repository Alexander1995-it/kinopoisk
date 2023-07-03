import React from 'react';
import style from 'App.module.scss';
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Movies from "components/Movies/Movies";
import InfoMovie from "components/InfoMovie/InfoMovie";

function App() {
    console.log('feature_1')
    return (
        <div className={style.appBlock}>
            <Routes>
                <Route element={<Main/>}>
                    <Route path='/e' element={<div>e</div>}/>
                    <Route path='/' element={<Movies/>}/>
                    <Route path='/infoMovie/:id' element={<InfoMovie/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
