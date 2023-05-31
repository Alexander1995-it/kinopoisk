import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "store/store";
import Movie from "components/Movies/Movie/Movie";
import style from './Movies.module.scss'
import CustomPagination from "common/CustomPagination";
import {actionsMovies, fetchMovies} from "store/moviesReducer";
import {Link} from "react-router-dom";


const Movies = () => {

    const dispatch = useAppDispatch()
    const movies = useAppSelector((state) => state.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [movies.page, movies.filterMovies])

    const handlerPagination = (page: number) => dispatch(actionsMovies.changePage(page))

    return (
        <div className={style.moviesBlock}>
            <div className={style.moviesWrapper}>
                {movies && movies.docs.map((el: any) => <Link to='/infoMovie' key={el.id}><Movie movie={el}/></Link>)}
            </div>
            <CustomPagination page={movies.page} onChange={handlerPagination} pages={movies.pages}/>
        </div>
    );
};

export default Movies;