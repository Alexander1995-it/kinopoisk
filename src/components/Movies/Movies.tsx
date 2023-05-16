import React from 'react';
import {useAppSelector} from "../../store/store";

const Movies = () => {

    const movie = useAppSelector((state) => state.movies?.docs)
    console.log('app', movie)

    return (
        <div>
            Movies
        </div>
    );
};

export default Movies;