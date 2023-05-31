import React from 'react';
import {useAppSelector} from "store/store";

const InfoMovie = () => {

    let infoMovie = useAppSelector(state => state.movies.currentMovie)
    console.log(infoMovie)
    return (
        <div style={{color: "white"}}>
            {infoMovie.name}
        </div>
    );
};

export default InfoMovie;