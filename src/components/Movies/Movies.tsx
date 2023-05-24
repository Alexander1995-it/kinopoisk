import React from 'react';
import {useAppSelector} from "store/store";
import Movie from "components/Movies/Movie/Movie";
import style from './Movies.module.scss'
import CustomPagination from "common/CustomPagination";


const Movies = () => {

    const movies = useAppSelector((state) => state.movies.docs)
    console.log('app', movies)


    return (
        <div className={style.moviesBlock}>
            {movies && movies.map((el: any) => <Movie movie={el}/>)}
            <CustomPagination/>
        </div>
    );
};

export default Movies;