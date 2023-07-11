import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import {actionsMovies, fetchMovies} from "store/moviesReducer";
import style from './FilterMovies.module.scss'
import {Link, useSearchParams} from "react-router-dom";
import {FilterMoviesType} from "common/api/movies.service";

const FilterMovies = () => {

    const dispatch = useAppDispatch()
    const filterMovie = useAppSelector(state => state.movies.type)
    const [searchParams, setSearchParams] = useSearchParams()
    const handlerFilter = (filter: FilterMoviesType) => {
        console.log(searchParams)
        setSearchParams({
            type: filter
        })
        dispatch(actionsMovies.changeFilter(filter))
        dispatch(actionsMovies.changePage(1))
    }

    return (
        <div className={style.filterMoviesBlock}>
            <Link className={filterMovie === 'movie' ? style.activeFilter : ''}
                  to='/'
                  onClick={() => handlerFilter('movie')}>
                Фильмы
            </Link>
            <Link className={filterMovie === 'tv-series' ? style.activeFilter : ''}
                  to='/'
                  onClick={() => handlerFilter('tv-series')}>
                Сериалы
            </Link>
            <Link className={filterMovie === 'cartoon' ? style.activeFilter : ''}
                  to='/'
                  onClick={() => handlerFilter('cartoon')}>
                Мультфильмы
            </Link>
            <Link className={filterMovie === 'anime' ? style.activeFilter : ''}
                  to='/'
                  onClick={() => handlerFilter('anime')}>
                Аниме
            </Link>
        </div>
    );
};

export default FilterMovies; 