import React from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import {actionsMovies} from "store/moviesReducer";
import style from './FilterMovies.module.scss'
import {Link} from "react-router-dom";

const FilterMovies = () => {

    const dispatch = useAppDispatch()
    
    const handlerFilter = (filter: string) => {
        dispatch(actionsMovies.changeFilter(filter))
        dispatch(actionsMovies.changePage(1))
    }

    return (
        <div className={style.filterMoviesBlock}>
            <Link to='/' onClick={() => handlerFilter('movie')}>Фильмы</Link>
            <Link to='/' onClick={() => handlerFilter('tv-series')}>Сериалы</Link>
            <Link to='/' onClick={() => handlerFilter('cartoon')}>Мультфильмы</Link>
            <Link to='/' onClick={() => handlerFilter('anime')}>Аниме</Link>
        </div>
    );
};

export default FilterMovies; 