import React from 'react';
import {MovieType} from "common/api/movies.service";
import style from './Movie.module.scss'
import {Link} from "react-router-dom";
import {fetchMovie} from "store/movieReducer";
import {useAppDispatch} from "store/store";

type MoviePropsTye = {
    movie: MovieType
}

const Movie = ({movie}: MoviePropsTye) => {

    const dispatch = useAppDispatch()

    return (
        <div className={style.movieBlock}>
            <Link to={`/infoMovie/${movie.id}`}>
                <img className={style.image} src={movie.poster && movie.poster.url}
                     alt="No img"/>
            </Link>
            <div className={style.nameMovie}>{movie.name}</div>
        </div>
    );
};

export default Movie;