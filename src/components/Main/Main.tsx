import React from 'react';
import style from './Main.module.scss'
import {Outlet} from "react-router-dom";
import FilterMovies from "components/FilterMovies/FilterMovies";

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <FilterMovies/>
            <Outlet/>
        </div>
    );
};

export default Main;