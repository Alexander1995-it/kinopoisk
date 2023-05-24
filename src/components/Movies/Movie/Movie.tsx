import React from 'react';
import {MovieType} from "api/movies.service";
import style from './Movie.module.scss'

type MoviePropsTye = { movie: MovieType }

const Movie = (props: MoviePropsTye) => {
    return (
        <div className={style.movieBlock}>
            <div>
                <img width='150px' height='220px' src={props.movie.poster.url} alt="No img"/>
            </div>
            <div className={style.nameMovie}>{props.movie.name}</div>
        </div>
    );
};

export default Movie;