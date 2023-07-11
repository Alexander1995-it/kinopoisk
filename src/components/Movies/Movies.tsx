import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import Movie from "components/Movies/Movie/Movie";
import style from './Movies.module.scss'
import CustomPagination from "common/lib/Pagination/CustomPagination";
import {actionsMovies, fetchMovies} from "store/moviesReducer";
import {useSearchParams} from "react-router-dom";
import {FilterMoviesType} from "common/api/movies.service";
import {Loading} from "common/lib/Loading/Loading";
import {InputSearch} from "common/lib/InputSearch/InputSearch";
import {useDebounce} from "common/hooks/useDebounce";


const Movies = () => {

    const dispatch = useAppDispatch()
    const movies = useAppSelector((state) => state.movies)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const [searchParams, setSearchParams] = useSearchParams()

    const debouncedValue = useDebounce<string>(movies.searchName, 700)

    useEffect(() => {
        let type = searchParams.get('type')
        let page = searchParams.get('page')
        let name = searchParams.get('name')
        dispatch(actionsMovies.changeSearchName(name))
        dispatch(actionsMovies.changeFilter(type))
        dispatch(actionsMovies.changePage(page))
    }, [])

    useEffect(() => {
        if (movies.currentPage) {
            dispatch(fetchMovies({
                page: movies.currentPage,
                type: movies.type as FilterMoviesType,
                name: movies.searchName
            }))
        }
        searchParams.set('page', String(movies.currentPage))
        searchParams.set('name', movies.searchName)
        searchParams.set('type', movies.type)
        setSearchParams(searchParams)

    }, [movies.currentPage, movies.type, debouncedValue])


    const handlerPagination = (page: number) => {
        dispatch(actionsMovies.changePage(page))
    }
    console.log(debouncedValue)
    return (
        <div className={style.moviesBlock}>
            <div>
                <div className={style.inputBlock}>
                    <InputSearch
                        value={movies.searchName}
                        placeholder='Поиск'
                        onChange={(e) => dispatch((actionsMovies.changeSearchName(e.currentTarget.value)))}/>
                </div>
                {isLoading ? <div className={style.loadingBlock}>
                        <Loading/>
                    </div>
                    : <div className={style.moviesWrapper}>
                        {movies && movies.docs.map((el) => <div
                            key={el.id}
                            className={style.item}>
                            <Movie
                                movie={el}/></div>)}
                    </div>
                }
            </div>
            {!!movies.total &&
                <CustomPagination page={movies.currentPage ? movies.currentPage : 1} onChange={handlerPagination}
                                  pages={movies.pages}/>}

        </div>
    );
};

export default Movies;