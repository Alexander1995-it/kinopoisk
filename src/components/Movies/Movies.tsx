import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import Movie from "components/Movies/Movie/Movie";
import style from './Movies.module.scss'
import CustomPagination from "common/lib/Pagination/CustomPagination";
import {actionsMovies, fetchMovies} from "store/moviesReducer";
import {useSearchParams} from "react-router-dom";
import {FilterMoviesType} from "common/api/movies.service";
import {Loading} from "common/lib/Loading/Loading";


const Movies = () => {

    const dispatch = useAppDispatch()
    const movies = useAppSelector((state) => state.movies)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch(actionsMovies.changePage(searchParams.get('page')))
        dispatch(actionsMovies.changeFilter(searchParams.get('type')))
    }, [])

    useEffect(() => {
        if (movies.currentPage) {
            dispatch(fetchMovies({page: movies.currentPage, type: movies.type}))
        }
        setSearchParams({
            page: String(movies.currentPage),
            type: movies.type as FilterMoviesType
        })
    }, [movies.currentPage, movies.type])


    const handlerPagination = (page: number) => {
        dispatch(actionsMovies.changePage(page))
    }

    return (
        <div className={style.moviesBlock}>
            {isLoading
                ? <div className={style.loadingBlock}>
                    <Loading/>
                </div>
                : <div className={style.moviesWrapper}>
                    {movies && movies.docs.map((el) => <div key={el.id}><Movie
                        movie={el}/></div>)}
                </div>
            }

            <CustomPagination page={movies.currentPage ? movies.currentPage : 1} onChange={handlerPagination}
                              pages={movies.pages}/>
        </div>
    );
};

export default Movies;