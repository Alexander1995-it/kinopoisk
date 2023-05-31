import React from 'react';
import {MovieType} from "api/movies.service";
import style from './Movie.module.scss'
import {useDispatch} from "react-redux";
import {actionsMovies} from "store/moviesReducer";

type MoviePropsTye = { movie: MovieType }

const Movie = ({movie}: MoviePropsTye) => {
    const dispatch = useDispatch()
    return (
        <div className={style.movieBlock}>
            <div onClick={() => dispatch(actionsMovies.setInfoMovie(movie.id))}>
                <img width='150px' height='220px' src={movie.poster ? movie.poster.url : ''}
                     alt="No img"/>
            </div>
            <div className={style.nameMovie}>{movie.name}</div>
        </div>
    );
};

export default Movie;